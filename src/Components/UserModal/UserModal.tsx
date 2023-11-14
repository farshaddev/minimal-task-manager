import React from "react";
import { Avatar, Button, Col, Modal, Row } from "antd";
import { UserType } from "../../types/user";
import "./UserModal.scss";

interface UserModalProps {
	isModalOpen: boolean;
	handleOk: () => void;
	user: UserType;
}

const UserModal: React.FC<UserModalProps> = ({
	isModalOpen,
	handleOk,
	user,
}) => {
	return (
		<Modal
			title={`UserName: ${user.username}`}
			open={isModalOpen}
			onOk={handleOk}
			onCancel={handleOk}
			className="user-info"
			footer={[
				<Button key="back" onClick={handleOk}>
					Return
				</Button>,
			]}
		>
			<Row gutter={[12, 12]}>
				<Col md={8}>
					<Avatar
						style={{ backgroundColor: "#6c5ce7", verticalAlign: "middle" }}
						size={100}
						gap={4}
						className="user-info__avatar"
					>
						{user.username}
					</Avatar>
				</Col>
				<Col md={16}>
					<ul className="user-info__list">
						<li className="user-info__list-item">
							<span className="user-info__list-item-label">FullName:</span>
							<span className="user-info__list-item-value">{user.name}</span>
						</li>
						<li className="user-info__list-item">
							<span className="user-info__list-item-label">Phone:</span>
							<span className="user-info__list-item-value">{user.phone}</span>
						</li>
						<li className="user-info__list-item">
							<span className="user-info__list-item-label">Email:</span>
							<span className="user-info__list-item-value">{user.email}</span>
						</li>
						<li className="user-info__list-item">
							<span className="user-info__list-item-label">WebSite:</span>
							<span className="user-info__list-item-value">{user.website}</span>
						</li>
					</ul>
				</Col>
			</Row>
		</Modal>
	);
};

export default UserModal;
