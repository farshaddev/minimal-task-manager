import { Button, Form, Select, Switch } from "antd";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "./Filter.scss";
import { UserType } from "../../types/user";
import CreateToDoModal from "../CreateToDoModal/CreateToDoModal";

interface FilterProps {
	users: UserType[];
	onState: (value: boolean) => void;
	onUser: (value: string) => void;
	onClear: () => void;
}

const Filter: React.FC<FilterProps> = ({ users, onState, onUser, onClear }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [form] = Form.useForm();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onChange = (value: string) => {
		onUser(value);
	};

	const filterOption = (
		input: string,
		option?: { label: string; value: string } | undefined
	) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

	const handleReset = () => {
		form.resetFields();
		onClear();
	};

	return (
		<>
			<Form form={form} name="filterForm" className="filter">
				<h2 className="filter__caption">Let the productivity flow!</h2>
				<div className="filter__inputs">
					<Form.Item name="state" label="Filter by:">
						<Switch
							checkedChildren="Done"
							unCheckedChildren="To-Do"
							onChange={onState}
						/>
					</Form.Item>
					<Form.Item name="assignment">
						<Select
							showSearch
							placeholder="Assignment"
							optionFilterProp="children"
							onChange={onChange}
							filterOption={filterOption}
							options={users.map((user) => ({
								value: user.username,
								label: user.username,
							}))}
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={handleReset} type="link">
							Clear
						</Button>
					</Form.Item>
				</div>
				<Button onClick={showModal} type="primary">
					<FaPlus />
					<span className="create-btn_label">New Task</span>
				</Button>
			</Form>
			<CreateToDoModal
				isModalOpen={isModalOpen}
				handleOk={handleOk}
				handleCancel={handleCancel}
				users={users}
			/>
		</>
	);
};

export default Filter;
