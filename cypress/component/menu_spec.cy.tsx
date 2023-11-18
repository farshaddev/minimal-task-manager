import React from "react";
import { menuItems } from "../../src/Components/Menu/MenuItems"; // Adjust the path based on your project structure

// Assuming you have a component that renders the menu items based on the menuItems data
import MenuListItem from "../../src/Components/Menu/MenuListItem"; // Adjust the path

describe("Menu component", () => {
	menuItems.forEach((menuItem) => {
		it(`renders ${menuItem.text} correctly`, () => {
			cy.mount(
				<MenuListItem
					index={menuItem.index} // Assuming you have an index property in your menuItem
					text={menuItem.text}
					icon={menuItem.icon}
					href={menuItem.href}
					className={menuItem.className}
				/>
			); // Mount your menu component

			// Your component rendering logic goes here, e.g., click a button to open the menu
			// Example: cy.get('[data-testid="open-menu-button"]').click();

			// Use Cypress commands to interact with and assert on the rendered elements
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
