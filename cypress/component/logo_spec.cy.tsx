import React from "react";
import Logo from "../../src/Components/Logo/Logo";

describe("Logo component", () => {
	it("renders correctly", () => {
		cy.mount(<Logo />);

		cy.contains("Minimal Task Manager").should("exist");
		cy.get('[data-testid="logo-icon"]').should("exist");
	});
});
