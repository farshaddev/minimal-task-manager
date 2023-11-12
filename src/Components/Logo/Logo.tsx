import React from "react";
import { FaTasks } from "react-icons/fa";
import "./Logo.scss";

const Logo: React.FC = () => {
	return (
		<div className="logo">
			<FaTasks data-testid="logo-icon" className="logo__icon" />
			<span className="logo__text">Minimal Task Manager</span>
		</div>
	);
};

export default Logo;
