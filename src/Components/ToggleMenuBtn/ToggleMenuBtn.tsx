import React from "react";
import { useMenu } from "../../contexts/MenuContext";
import "./ToggleMenuBtn.scss";

const ToggleMenuBtn: React.FC = () => {
	const { isMenuOpen, toggleMenu } = useMenu();

	return (
		<div className="menu-toggle">
			<button
				type="button"
				onClick={toggleMenu}
				className={
					isMenuOpen
						? "menu-toggle__btn menu-toggle__btn--open"
						: "menu-toggle__btn"
				}
			>
				<span className="menu-toggle__btn-line"></span>
				<span className="menu-toggle__btn-line"></span>
				<span className="menu-toggle__btn-line"></span>
			</button>
		</div>
	);
};

export default ToggleMenuBtn;
