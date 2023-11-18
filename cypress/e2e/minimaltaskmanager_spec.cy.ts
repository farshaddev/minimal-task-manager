describe("Minimal Task Manager E2E Test", () => {
	it("Should navigate to the homepage, load todo cards", async () => {
		// Visit the homepage
		cy.visit("http://localhost:3000");

		// Await for loading
		cy.get(".todo-container.loaded");

		const $todos = cy
			.get(".todo-container__content .ant-row .ant-col")
			.should(Cypress._.noop);

		if ($todos.length < 1) {
			cy.get('[data-testid="empty-message"]').should("be.visible");
		}

		// // Ensure the task is created
		// cy.get('[data-testid="task"]').should("have.length", 1);

		// // Mark the task as completed
		// cy.get('[data-testid="task-checkbox"]').check();

		// // Ensure the task is marked as completed
		// cy.get('[data-testid="task"]').should("have.class", "completed");

		// // Delete the task
		// cy.get('[data-testid="delete-task-button"]').click();

		// // Confirm deletion
		// cy.get(".ant-popover-buttons button").contains("Yes").click();

		// // Ensure the task is deleted
		// cy.get('[data-testid="task"]').should("not.exist");
	});
	it("Shoud search and filter", async () => {
		const $todos = cy
			.get(".todo-container__content .ant-row .ant-col")
			.should(Cypress._.noop);

		cy.get(".search-input").type("tempore"); // search tempore
		cy.get('[data-testid="state"]').click(); // filter by state
		cy.get('[data-testid="assignment"]').click().type("Samantha"); // Type Samantha
		cy.get(".ant-select-item-option").click(); // filter by Samantha's task

		$todos.should("have.length", 1);
	});
	it("Shoud create a new task", async () => {
		cy.get("button").contains("New Task").click();
		cy.get('[data-testid="form-todo-title"]').type("Sample Task Title"); // Type a title
		cy.get('.todo-form [data-testid="assignment"]').click().type("Samantha"); // Type the username
		cy.get(".ant-select-item-option").click(); // Click on the dropdown option
		cy.get('[data-testid="create-submit"]').click(); // Click on the submit button
		cy.get(".ant-notification-notice-message").should(
			"have.text",
			"Mock Task Created Successfully!"
		); // Check if the success message is displayed
	});
});
