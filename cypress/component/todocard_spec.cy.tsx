import React from "react";
import ToDoCard from "../../src/Components/ToDoCard/ToDoCard";

const users = [
	{ id: 1, username: "user1" },
	{ id: 2, username: "user2" },
];

const todo = {
	id: 1,
	title: "Sample ToDo",
	completed: false,
	userId: 1,
};

describe("ToDoCard component", () => {
	it("renders the ToDoCard correctly", () => {
		// Mount the ToDoCard component with necessary props
		cy.mount(<ToDoCard {...todo} users={users} />);

		// Ensure that the ToDoCard renders the correct title and checkbox state
		cy.get(".ant-checkbox-wrapper").should("have.text", todo.title);
		cy.get(".ant-checkbox-input").should("not.be.checked");
	});

	it("toggles the completed state on checkbox change", () => {
		// Mount the ToDoCard component with necessary props
		cy.mount(<ToDoCard {...todo} users={users} />);

		// Toggle the checkbox state
		cy.get(".ant-checkbox-input").check();

		// Ensure that the completed state is toggled
		cy.get(".ant-checkbox-input").should("be.checked");
	});

	it("displays user information modal when avatar is clicked", () => {
		// Mount the ToDoCard component with necessary props
		cy.mount(<ToDoCard {...todo} users={users} />);

		// Click on the avatar to open the user information modal
		cy.get(".todo-card__content-assignment-avatar").click();

		// Ensure that the user information modal is visible
		cy.get(".user-info").should("be.visible");
	});

	it("deletes the task when delete button is clicked", () => {
		// Stub the delete request to prevent actual API call
		cy.stub(window, "fetch").resolves({});

		// Mount the ToDoCard component with necessary props
		cy.mount(<ToDoCard {...todo} users={users} />);

		// Click on the delete button to trigger the deletion
		cy.get(".action-btn--delete").click();

		// Confirm the deletion in the pop-up
		cy.get(".ant-btn-primary").contains("Yes").click();

		// Ensure that the notification for successful deletion is shown
		cy.get(".ant-notification-notice-message").should(
			"have.text",
			"Mock Task Deleted Successfully!"
		);
	});
});
