describe("Edit ToDo E2E Test", () => {
	before(() => {
		// Visit the homepage only once before any test
		cy.visit("http://localhost:3000");

		// Await for loading
		cy.get(".todo-container.loaded");

		// Check for the existence of todo cards
		cy.get(".todo-container__content .ant-row .ant-col").should("exist");

		// Check that there are more than 0 todo cards
		cy.get(".todo-container__content .ant-row .ant-col").should(
			"have.length.greaterThan",
			0
		);
	});

	it("Should edit todo card", () => {
		// Click on the edit button to trigger the deletion
		cy.get(".action-btn--edit").eq(0).click({ force: true });

		// Edit task title should be visible
		cy.get(".ant-modal-title").contains("Edit Task").should("exist");

		// Data must be loaded
		cy.get('[data-testid="form-todo-title"]').should(
			"have.value",
			"delectus aut autem"
		);

		// Changing the input
		cy.get('[data-testid="form-todo-title"]').type(" new");

		// Submit the Edition
		cy.get('[data-testid="edit-submit"]').click();

		// Check if the success message is displayed
		cy.get(".ant-notification-notice-message").should(
			"have.text",
			"Mock Task Edited Successfully!"
		);
	});
});
