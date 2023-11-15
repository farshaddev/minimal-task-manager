import React, { useState } from "react";
import { Avatar, Card, Checkbox, Popconfirm, notification } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { TodoType } from "../../types/todo";
import { UserType } from "../../types/user";
import ActionBtn from "../ActionBtn/ActionBtn";
import "./ToDoCard.scss";
import UserModal from "../UserModal/UserModal";
import EditToDoModal from "../EditToDoModal/EditToDoModal";
import axios from "axios";

interface ToDoCardProps extends TodoType {
	users: UserType[];
	onChange?: (e: CheckboxChangeEvent) => void;
}

const ToDoCard: React.FC<ToDoCardProps> = ({
	id,
	title,
	users,
	completed,
	userId,
}) => {
	const [loading, setLoading] = useState(false);
	const [isCompleted, setIsCompleted] = useState(completed);
	const [isModalOpen, setIsModalOpen] = useState({ user: false, edit: false });
	const user = users.find((user) => user.id === userId) as UserType;

	const onChange = () => {
		setIsCompleted(!isCompleted);
	};

	const showUserInfoModal = () => {
		setIsModalOpen({ ...isModalOpen, user: true });
	};

	const handleUserInfoOk = () => {
		setIsModalOpen({ ...isModalOpen, user: false });
	};

	const showEditModal = () => {
		setIsModalOpen({ ...isModalOpen, edit: true });
	};

	const handleEditOk = () => {
		setIsModalOpen({ ...isModalOpen, edit: false });
	};

	const handleEditCancel = () => {
		setIsModalOpen({ ...isModalOpen, edit: false });
	};

	const handleDelete = async () => {
		setLoading(true);
		try {
			const response = await axios.delete<TodoType>(
				`https://jsonplaceholder.typicode.com/todos/${id}`
			);

			setLoading(false);
			notification.success({
				message: "Mock Task Deleted Successfully!",
				description: `"${title}" has been Deleted. Please note that this creation is "Mock" and won't update the todo list.`,
			});
		} catch (error) {
			setLoading(false);
			console.error("Error:", error);
		}
	};

	return (
		<>
			<Card
				title={
					<Checkbox checked={isCompleted} onChange={onChange}>
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
								onClick={showUserInfoModal}
							>
								{user?.username[0] ?? "unknown"}
							</Avatar>
						) : (
							"Unknown"
						)}
					</div>
					<div className="todo-card__content-actions">
						<ActionBtn type="edit" onClick={showEditModal} />
						<Popconfirm
							title="Delete the task"
							description="Are you sure to delete this task?"
							okText="Yes"
							cancelText="No"
							onConfirm={handleDelete}
							disabled={loading}
						>
							<ActionBtn type="delete" />
						</Popconfirm>
					</div>
				</div>
			</Card>
			<EditToDoModal
				isModalOpen={isModalOpen.edit}
				handleOk={handleEditOk}
				handleCancel={handleEditCancel}
				users={users}
				detail={{ id: id, title: title, user: user }}
			/>
			{user && (
				<UserModal
					isModalOpen={isModalOpen.user}
					handleOk={handleUserInfoOk}
					user={user}
				/>
			)}
		</>
	);
};

export default ToDoCard;
