describe("Create ToDo E2E Test", () => {
	before(() => {
		// Visit the homepage only once before any test
		cy.visit("http://localhost:3000");
		// Await for loading
		cy.get(".todo-container").should("have.class", "loaded", {
			timeout: 10000,
		});
	});

	it("Should create a new task", () => {
		// click on the New Task button
		cy.get("button").contains("New Task").click();

		// Type a title
		cy.get('[data-testid="form-todo-title"]').type("Sample Task Title");

		// Type the username
		cy.get('.todo-form [data-testid="assignment"]').click().type("Samantha");

		// Click on the dropdown option
		cy.get(".ant-select-item-option").click();

		// Click on the submit button
		cy.get('[data-testid="create-submit"]').click();

		// Check if the success message is displayed
		cy.get(".ant-notification-notice-message").should(
			"have.text",
			"Mock Task Created Successfully!"
		);
	});
});
