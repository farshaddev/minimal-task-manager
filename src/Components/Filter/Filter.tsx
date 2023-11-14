import { Button, Select, Switch } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import "./Filter.scss";
import { UserType } from "../../types/user";

interface FilterProps {
	users: UserType[];
	onState: (value: boolean) => void;
	onUser: (value: string) => void;
	onClear: () => void;
}

const Filter: React.FC<FilterProps> = ({ users, onState, onUser, onClear }) => {
	const onChange = (value: string) => {
		onUser(value);
	};

	const filterOption = (
		input: string,
		option?: { label: string; value: string } | undefined
	) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

	return (
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
			<Button type="primary">
				<FaPlus />
				<span>New Task</span>
			</Button>
		</div>
	);
};

export default Filter;
