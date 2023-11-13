import React from "react";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import "./ActionBtn.scss";

type ActionType = "edit" | "delete";

interface ActionBtnProps {
	type: ActionType;
}

const ActionBtn: React.FC<ActionBtnProps> = ({ type }) => {
	const buttonClassName = `action-btn action-btn--${type}`;

	return (
		<button className={buttonClassName}>
			{type === "edit" ? <MdModeEdit /> : <MdOutlineDeleteOutline />}
		</button>
	);
};

export default ActionBtn;
