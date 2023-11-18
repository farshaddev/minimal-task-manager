import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Input, Select, notification } from "antd";
import { UserType } from "../../types/user";
import "./EditToDoModal.scss";
import axios from "axios";
import { TodoType } from "../../types/todo";

type DetailType = {
	id: number;
	title: string;
	user: UserType;
};

interface EditToDoModalProps {
	isModalOpen: boolean;
	handleOk: () => void;
	handleCancel: () => void;
	users: UserType[];
	detail: DetailType;
}

type FieldType = {
	title?: string;
	userId?: number;
};

const EditToDoModal: React.FC<EditToDoModalProps> = ({
	isModalOpen,
	handleOk,
	handleCancel,
	users,
	detail,
}) => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		form.setFieldsValue({ title: detail.title, userId: detail.user.id });
	}, [detail, form]);

	const onFinish = async () => {
		setLoading(true);
		const { title, userId } = form.getFieldsValue();

		try {
			const response = await axios.put<TodoType>(
				`https://jsonplaceholder.typicode.com/todos/${detail.id}`,
				{
					title: title,
					userId: userId,
				}
			);

			setLoading(false);
			notification.success({
				message: "Mock Task Edited Successfully!",
				description: `"${response.data.title}" has been Edited. Please note that this creation is "Mock" and won't update the todo list.`,
			});
			form.resetFields();
			handleOk();
		} catch (error) {
			setLoading(false);
			console.error("Error:", error);
		}
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
			data-testid="edit-todo-modal"
			title="Edit Task"
			open={isModalOpen}
			onCancel={handleCancel}
			footer={null}
		>
			<Form
				form={form}
				name="todoForm"
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
				<div className="ant-modal-footer">
					<Button key="back" onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						key="submit"
						htmlType="submit"
						type="primary"
						loading={loading}
					>
						Submit
					</Button>
				</div>
			</Form>
		</Modal>
	);
};

export default EditToDoModal;
