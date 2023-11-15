import React from "react";
import { Button, Form, Modal, Input, Select } from "antd";
import { UserType } from "../../types/user";
import "./CreateToDoModal.scss";

interface CreateToDoModalProps {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	users: UserType[];
}

type FieldType = {
	title?: string;
	userId?: number;
};

const CreateToDoModal: React.FC<CreateToDoModalProps> = ({
	isModalOpen,
	handleOk,
	handleCancel,
	users,
}) => {
	const onFinish = (values: any) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	const onChange = (value: string) => {
		console.log(value);
	};

	const filterOption = (
		input: string,
		option?: { label: string; value: number } | undefined
	) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

	return (
		<Modal
			title="New Task"
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleCancel}
			className="create-todo"
			footer={[
				<Button key="back" onClick={handleCancel}>
					Cancel
				</Button>,
				<Button
					key="submit"
					type="primary"
					// loading={loading}
					onClick={handleOk}
				>
					Submit
				</Button>,
			]}
		>
			<Form
				name="todo-form"
				className="todo-form"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item<FieldType>
					label="ToDo Title"
					name="title"
					rules={[{ required: true, message: "Please input your todo!" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item<FieldType>
					label="Assign To"
					name="userId"
					rules={[
						{
							required: true,
							message: "Please select who you want to assign!",
						},
					]}
				>
					<Select
						showSearch
						placeholder="Assignment"
						optionFilterProp="children"
						onChange={onChange}
						filterOption={filterOption}
						options={users.map((user) => ({
							value: user.id,
							label: user.username,
						}))}
					/>
				</Form.Item>

				{/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item> */}
			</Form>
		</Modal>
	);
};

export default CreateToDoModal;
