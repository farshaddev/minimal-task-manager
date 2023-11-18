describe("Filter Cards E2E Test", () => {
	before(() => {
		// Visit the homepage only once before any test
		cy.visit("http://localhost:3000");

		// Await for loading
		cy.get(".todo-container").should("have.class", "loaded", {
			timeout: 10000,
		});

		// Check for the existence of todo cards
		cy.get(".todo-container__content .ant-row .ant-col").should("exist");

		// Check that there are more than 0 todo cards
		cy.get(".todo-container__content .ant-row .ant-col").should(
			"have.length.greaterThan",
			0
		);
	});

	it("Should navigate to the homepage, load todo cards, search and filter cards", () => {
		// Search and filter cards
		cy.get(".todo-container__content .ant-row .ant-col").as("todos");

		// search tempore
		cy.get(".search-input").type("tempore");

		// filter by state
		cy.get('[data-testid="state"]').click();

		// Type Samantha
		cy.get('[data-testid="assignment"]').click().type("Samantha");

		// filter by Samantha's task
		cy.get(".ant-select-item-option").click();

		// Use the alias to reference the actual elements and wait for it
		cy.get("@todos").should("have.length", 1);
	});
});
