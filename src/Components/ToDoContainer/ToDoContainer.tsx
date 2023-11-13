import React from "react";
import ToDoCard from "../ToDoCard/ToDoCard";
import { Row, Col } from "antd";
import "./ToDoContainer.scss";
import { useToDos } from "../../hooks/useToDos";

const ToDoContainer: React.FC = () => {
	const { toDos } = useToDos();

	return (
		<div className="todo-container">
			<div className="todo-container__content">
				<Row gutter={[16, 16]}>
					{toDos.map((item) => (
						<Col md={8} key={item.id}>
							<ToDoCard {...item} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default ToDoContainer;
