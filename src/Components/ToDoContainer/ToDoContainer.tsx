import React, { useState, useEffect } from "react";
import ToDoCard from "../ToDoCard/ToDoCard";
import { Row, Col, Card, Empty } from "antd";
import "./ToDoContainer.scss";
import { useToDos } from "../../hooks/useToDos";
import { useUsers } from "../../hooks/useUsers";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { TodoType } from "../../types/todo";
import { UserType } from "../../types/user";

const ToDoContainer: React.FC = () => {
	const { users, loading: usersLoading } = useUsers();
	const { toDos, loading: toDosLoading } = useToDos();
	const [filteredToDos, setFilteredToDos] = useState<TodoType[]>(toDos);
	const [currentFilters, setCurrentFilters] = useState<{
		title: string;
		completed: boolean | null;
		username: string;
	}>({
		title: "",
		completed: null,
		username: "",
	});

	useEffect(() => {
		applyFilters();
	}, [toDos, currentFilters]);

	const applyFilters = () => {
		let filtered = toDos;

		if (currentFilters.title) {
			filtered = filtered.filter((toDo) =>
				toDo.title.includes(currentFilters.title)
			);
		}

		if (currentFilters.completed !== null) {
			filtered = filtered.filter(
				(toDo) => toDo.completed === currentFilters.completed
			);
		}

		if (currentFilters.username) {
			const userId = users.find(
				(user) => user.username === currentFilters.username
			)?.id;
			if (userId) {
				filtered = filtered.filter((toDo) => toDo.userId === userId);
			}
		}

		setFilteredToDos(filtered);
	};

	const onSearch = (title: string): void => {
		setCurrentFilters((prevFilters) => ({
			...prevFilters,
			title,
		}));
	};

	const onState = (completed: boolean): void => {
		setCurrentFilters((prevFilters) => ({
			...prevFilters,
			completed,
		}));
	};

	const onClear = (): void => {
		setCurrentFilters({
			title: "",
			completed: null,
			username: "",
		});
	};

	const onUser = (username: string): void => {
		setCurrentFilters((prevFilters) => ({
			...prevFilters,
			username,
		}));
	};

	return (
		<div className="todo-container">
			<div className="todo-container__header">
				<Search title={currentFilters.title} onSearch={onSearch} />
				<Filter
					users={users}
					onState={onState}
					onUser={onUser}
					onClear={onClear}
				/>
			</div>
			<div
				className={
					!usersLoading &&
					!toDosLoading &&
					(users?.length < 1 || filteredToDos.length < 1)
						? "todo-container__content todo-container__content--align-center"
						: "todo-container__content"
				}
			>
				<Row gutter={[16, 16]}>
					{usersLoading && toDosLoading ? (
						<>
							<Col md={12}>
								<Card
									style={{ width: "100%", height: 131 }}
									loading={true}
								></Card>
							</Col>
							<Col md={12}>
								<Card
									style={{ width: "100%", height: 131 }}
									loading={true}
								></Card>
							</Col>
						</>
					) : (
						<>
							{users?.length > 0 && filteredToDos.length > 0 ? (
								filteredToDos.map((todo) => (
									<Col md={12} key={todo.id}>
										<ToDoCard
											{...todo}
											user={
												users.find(
													(user) => user.id === todo.userId
												) as UserType
											}
										/>
									</Col>
								))
							) : (
								<Col md={24}>
									<Empty description="No to-dos available" />
								</Col>
							)}
						</>
					)}
				</Row>
			</div>
		</div>
	);
};

export default ToDoContainer;
