import React, { useState } from "react";
import { Avatar, Card, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { TodoType } from "../../types/todo";
import { UserType } from "../../types/user";
import ActionBtn from "../ActionBtn/ActionBtn";
import "./ToDoCard.scss";
import UserModal from "../UserModal/UserModal";

interface ToDoCardProps extends TodoType {
	user?: UserType | undefined;
	onChange?: (e: CheckboxChangeEvent) => void;
}

const ToDoCard: React.FC<ToDoCardProps> = ({ title, user, completed }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const onChange = (e: CheckboxChangeEvent) => {
		console.log(`checked = ${e.target.checked}`);
	};

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<Card
				title={
					<Checkbox checked={completed} onChange={onChange}>
						{title}
					</Checkbox>
				}
				bordered={false}
				className="todo-card"
			>
				<div className="todo-card__content">
					<div className="todo-card__content-assignment">
						<span className="todo-card__content-assignment-label">
							Assignment:
						</span>
						{user ? (
							<Avatar
								style={{ backgroundColor: "#6c5ce7", verticalAlign: "middle" }}
								size="small"
								gap={4}
								className="todo-card__content-assignment-avatar"
								onClick={showModal}
							>
								{user?.username[0] ?? "unknown"}
							</Avatar>
						) : (
							"Unknown"
						)}
					</div>
					<div className="todo-card__content-actions">
						<ActionBtn type="edit" />
						<ActionBtn type="delete" />
					</div>
				</div>
			</Card>
			{user && (
				<UserModal isModalOpen={isModalOpen} handleOk={handleOk} user={user} />
			)}
		</>
	);
};

export default ToDoCard;
