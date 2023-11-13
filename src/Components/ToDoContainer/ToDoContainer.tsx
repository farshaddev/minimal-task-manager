import React from "react";
import ToDoCard from "../ToDoCard/ToDoCard";
import { Row, Col, Card, Empty } from "antd";
import "./ToDoContainer.scss";
import { useToDos } from "../../hooks/useToDos";
import { useUsers } from "../../hooks/useUsers";

const ToDoContainer: React.FC = () => {
	const { users, loading: usersLoading } = useUsers();
	const { toDos, loading: toDosLoading } = useToDos();

	return (
		<div className="todo-container">
			<div className="todo-container__content">
				<Row gutter={[16, 16]}>
					{usersLoading || toDosLoading ? (
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
							{users?.length > 0 && toDos?.length > 0 ? (
								toDos.map((todo) => (
									<Col md={12} key={todo.id}>
										<ErrorBoundary>
											<ToDoCard
												{...todo}
												user={users.find((user) => user.id === todo.userId)}
											/>
										</ErrorBoundary>
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

class ErrorBoundary extends React.Component {
	// @ts-ignore
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	// @ts-ignore
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	// @ts-ignore
	componentDidCatch(error, errorInfo) {
		console.error("Error caught by error boundary:", error, errorInfo);
	}

	render() {
		// @ts-ignore
		if (this.state.hasError) {
			return <div>Something went wrong.</div>;
		}

		// @ts-ignore
		return this.props.children;
	}
}
