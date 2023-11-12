import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MenuItems } from "../Components/Menu/MenuItems";

describe("MenuItems component", () => {
	test.each(MenuItems.map((menuItem) => [menuItem]))(
		"renders %p correctly",
		(menuItem) => {
			render(
				<div>
					<span data-testid={`${menuItem.text}-icon`}>{menuItem.icon}</span>
					<span data-testid={`${menuItem.text}-text`}>{menuItem.text}</span>
					<span data-testid={`${menuItem.text}-className`}>
						{menuItem.className}
					</span>
					<span data-testid={`${menuItem.text}-href`}>{menuItem.href}</span>
				</div>
			);

			expect(screen.getByTestId(`${menuItem.text}-icon`)).toBeInTheDocument();
			expect(screen.getByTestId(`${menuItem.text}-text`)).toHaveTextContent(
				menuItem.text
			);
			expect(
				screen.getByTestId(`${menuItem.text}-className`)
			).toHaveTextContent(menuItem.className);
			expect(screen.getByTestId(`${menuItem.text}-href`)).toHaveTextContent(
				menuItem.href
			);
		}
	);
});
