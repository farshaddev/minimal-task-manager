import React from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import "./ActionBtn.scss";

type ActionType = "edit" | "delete";

interface ActionBtnProps {
	type: ActionType;
	onClick?: () => void;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ type, onClick }) => {
	const buttonClassName = `action-btn action-btn--${type}`;

	return (
		<button type="button" onClick={onClick} className={buttonClassName}>
			{type === "edit" ? <MdModeEdit /> : <MdOutlineDeleteOutline />}
		</button>
	);
};

export default ActionBtn;
