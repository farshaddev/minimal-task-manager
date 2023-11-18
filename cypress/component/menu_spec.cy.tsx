import React from "react";
import { menuItems } from "../../src/Components/Menu/MenuItems";

import MenuListItem from "../../src/Components/Menu/MenuListItem";

describe("Menu component", () => {
	menuItems.forEach((menuItem) => {
		it(`renders ${menuItem.text} correctly`, () => {
			cy.mount(
				<MenuListItem
					index={menuItem.index}
					text={menuItem.text}
					icon={menuItem.icon}
					href={menuItem.href}
					className={menuItem.className}
				/>
			);

			cy.get(`[data-testid="${menuItem.text}-icon"]`).should("exist");
			cy.get(`[data-testid="${menuItem.text}-text"]`).should(
				"have.text",
				menuItem.text
			);
			cy.get(`[data-testid="${menuItem.text}-link"]`).should(
				"have.attr",
				"class",
				`menu__list-link ${menuItem.className}`
			);
			cy.get(`[data-testid="${menuItem.text}-link"]`).should(
				"have.attr",
				"href",
				menuItem.href
			);
		});
	});
});
