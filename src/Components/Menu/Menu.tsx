import React from "react";
import Logo from "../Logo/Logo";
import { MenuItems } from "./MenuItems";
import "./Menu.scss";

const Menu: React.FC = () => {
	return (
		<aside className="menu">
			<Logo />
			<ul className="menu__list">
				{MenuItems.map((item, index) => (
					<li key={index}>
						<a
							className={`menu__list-link${
								item.className ? ` ${item.className}` : ""
							}`}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{item.icon}
							<span>{item.text}</span>
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Menu;
