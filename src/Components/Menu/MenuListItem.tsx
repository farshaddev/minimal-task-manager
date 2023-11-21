import React from "react";

interface MenuListItemProps {
	text: string;
	icon: React.ReactNode;
	href: string;
	className: string;
}

const MenuListItem: React.FC<MenuListItemProps> = ({
	text,
	icon,
	href,
	className,
}) => {
	return (
		<li>
			<a
				className={`menu__list-link${className ? ` ${className}` : ""}`}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				data-testid={`${text}-link`}
			>
				{icon}
				<span data-testid={`${text}-text`}>{text}</span>
			</a>
		</li>
	);
};

export default MenuListItem;
