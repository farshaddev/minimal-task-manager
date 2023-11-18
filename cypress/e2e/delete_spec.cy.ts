describe("Delete ToDo E2E Test", () => {
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

	it("Should delete todo card", () => {
		// Click on the delete button to trigger the deletion
		cy.get(".action-btn--delete").eq(0).click({ force: true });

		// Confirm the deletion in the pop-up
		cy.get(".ant-btn-primary").contains("Yes").click({ force: true });

		// Ensure that the notification for successful deletion is shown
		cy.get(".ant-notification-notice-message").should(
			"have.text",
			"Mock Task Deleted Successfully!"
		);
	});
});
