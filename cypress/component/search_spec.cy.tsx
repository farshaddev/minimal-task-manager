import React from "react";
import Search from "../../src/Components/Search/Search";

describe("Search Component", () => {
	it("renders with the provided title", () => {
		const title = "Initial Search Text";

		// Mount the Search component with an initial title
		cy.mount(<Search title={title} onSearch={() => {}} />);

		// Ensure that the input value is set correctly
		cy.get(".search-input").should("have.value", title);
	});
});
