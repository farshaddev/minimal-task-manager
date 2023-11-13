import React from "react";
import { Card, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { todoType } from "../../types/todo";

const ToDoCard: React.FC<todoType> = ({ userId, id, title, completed }) => {
	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<Card
			title={<Checkbox onChange={onChange}>{title}</Checkbox>}
			bordered={false}
		>
			{/* Any additional content you want in the card body */}
		</Card>
	);
};

export default ToDoCard;
