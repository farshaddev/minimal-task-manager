import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "../Components/Logo/Logo";

describe("Logo component", () => {
	test("renders correctly", () => {
		render(<Logo />);

		expect(screen.getByText("Minimal Task Manager")).toBeInTheDocument();
		expect(screen.getByTestId("logo-icon")).toBeInTheDocument();
	});
});
