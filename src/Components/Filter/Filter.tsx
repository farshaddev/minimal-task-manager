import { Button, Select, Switch } from "antd";
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

	return (
		<>
			<div className="filter">
				<h2 className="filter__caption">Let the productivity flow!</h2>
				<div className="filter__inputs">
					<span>Filter by:</span>
					<Switch
						checkedChildren="Done"
						unCheckedChildren="To-Do"
						onChange={onState}
					/>
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
					<Button onClick={onClear} type="link">
						Clear
					</Button>
				</div>
				<Button onClick={showModal} type="primary">
					<FaPlus />
					<span>New Task</span>
				</Button>
			</div>
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
