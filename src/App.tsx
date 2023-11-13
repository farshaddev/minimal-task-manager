import React from "react";
import "./App.scss";
import Menu from "./Components/Menu/Menu";
import ToDoContainer from "./Components/ToDoContainer/ToDoContainer";

function App() {
	return (
		<div className="app">
			<Menu />
			<ToDoContainer />
		</div>
	);
}

export default App;
