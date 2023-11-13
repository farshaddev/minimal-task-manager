import React from "react";
import { Avatar, Card, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { todoType } from "../../types/todo";
import { UserType } from "../../types/user";
import ActionBtn from "../ActionBtn/ActionBtn";
import "./ToDoCard.scss";

interface ToDoCardProps extends todoType {
	user?: UserType | undefined;
	onChange?: (e: CheckboxChangeEvent) => void;
}

const ToDoCard: React.FC<ToDoCardProps> = ({ title, user }) => {
	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	return (
		<Card
			title={<Checkbox onChange={onChange}>{title}</Checkbox>}
			bordered={false}
			className="todo-card"
		>
			<div className="todo-card__content">
				<div className="todo-card__content-assignment">
					<span className="todo-card__content-assignment-label">
						Assignment:
					</span>
					{user && (
						<Avatar
							style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
							size="small"
							gap={4}
							className="todo-card__content-assignment-avatar"
						>
							{user?.username[0] ?? "unknown"}
						</Avatar>
					)}
				</div>
				<div className="todo-card__content-actions">
					<ActionBtn type="edit" />
					<ActionBtn type="delete" />
				</div>
			</div>
		</Card>
	);
};

export default ToDoCard;
