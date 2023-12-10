import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { FaEarthAsia } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

export interface menuItemType {
	icon: React.ReactNode;
	className: string;
	text: string;
	href: string;
}

export const menuItems: menuItemType[] = [
	{
		icon: <RiWhatsappFill />,
		className: "menu__list-link--whatsapp",
		text: "WhatsApp",
		href: "https://wa.me/+989350696255",
	},
	{
		icon: <BsTelegram data-testid={`Telegram-icon`} />,
		className: "menu__list-link--telegram",
		text: "Telegram",
		href: "https://t.me/farshaddev",
	},
	{
		icon: <FaLinkedinIn data-testid={`Linkedin-icon`} />,
		className: "menu__list-link--linkedin",
		text: "Linkedin",
		href: "https://www.linkedin.com/in/farshaddevelopment",
	},
	{
		icon: <BsGithub data-testid={`GitHub-icon`} />,
		className: "menu__list-link--github",
		text: "GitHub",
		href: "https://github.com/farshaddev/minimal-task-manager",
	},
	{
		icon: <BiLogoGmail data-testid={`Gmail-icon`} />,
		className: "menu__list-link--gmail",
		text: "Gmail",
		href: "mailto:farshad.development@gmail.com",
	},
	{
		icon: <FaEarthAsia />,
		className: "menu__list-link--site",
		text: "farshaddarvishi.com",
		href: "https://farshaddarvishi.com",
	},
];
