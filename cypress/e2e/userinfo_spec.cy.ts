describe("User Info E2E Test", () => {
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

	it("Should open user info modal", () => {
		// click on the New Task button
		cy.get(".todo-card__content-assignment-avatar")
			.eq(0)
			.click({ force: true });

		// check if the info is loaded
		cy.get(".ant-modal-title").contains("UserName: Bret").should("exist");

		// check if the return button works
		cy.get(".ant-modal-footer .ant-btn").click();
		cy.get(".ant-modal").should("not.be.visible");
	});
});
