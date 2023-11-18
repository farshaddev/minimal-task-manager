import React from "react";
import Filter from "../../src/Components/Filter/Filter";
import CreateToDoModal from "../../src/Components/CreateToDoModal/CreateToDoModal";

const users = [
	{ id: 1, username: "user1" },
	{ id: 2, username: "user2" },
];

describe("Filter Component", () => {
	it("Filter Component renders correctly", () => {
		cy.mount(
			<Filter
				users={users}
				onState={() => {}}
				onUser={() => {}}
				onClear={() => {}}
			/>
		);

		cy.get(".filter").should("exist");
		cy.get(".filter__caption").should(
			"have.text",
			"Let the productivity flow!"
		);

		cy.get('[data-testid="state"]').click();

		cy.get('[data-testid="assignment"]').click().type("user1"); // Type the username
		cy.get(".ant-select-item-option").click(); // Click on the dropdown option

		cy.get("button").contains("Clear").click();

		cy.get("button").contains("New Task").click();
		cy.get('[data-testid="create-submit"]').click(); // Type the username
	});
	it("Create modal renders correctly", () => {
		cy.mount(
			<CreateToDoModal
				isModalOpen={true}
				handleOk={() => {}}
				handleCancel={() => {}}
				users={users}
			/>
		);

		// Click on the submit button without entering any data
		cy.get('[data-testid="create-submit"]').click();

		// Check if the error message is displayed
		cy.get(".ant-form-item-explain-error").should(
			"have.text",
			"Please input your todo!Please select who you want to assign!"
		);

		// Enter some data into the form fields
		cy.get('[data-testid="form-todo-title"]').type("Sample Task Title"); // Type a title
		cy.get('[data-testid="assignment"]').click().type("user1"); // Type the username
		cy.get(".ant-select-item-option").click(); // Click on the dropdown option

		// Click on the submit button again
		cy.get('[data-testid="create-submit"]').click();

		// Check if the error message is not displayed now
		cy.get(".ant-form-item-explain-error").should("not.exist");

		// Check if the modal is closed after clicking "submit button"
		cy.get('[data-testid="create-modal"]').should("not.exist");

		// Check if the success message is displayed
		cy.get(".ant-notification-notice-message").should(
			"have.text",
			"Mock Task Created Successfully!"
		);
	});
});
