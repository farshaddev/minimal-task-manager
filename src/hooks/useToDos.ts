import axios from "axios";
import { useState, useEffect } from "react";
import { todoType } from "../types/todo";

export const useToDos = () => {
	const [toDos, setToDos] = useState<todoType[]>([]);

	const fetchToDos = async () => {
		try {
			const response = await axios.get<todoType[]>(
				"https://jsonplaceholder.typicode.com/todos"
			);

			if (response.data) {
				setToDos(response.data);
			}
		} catch (error) {
			console.error("Error fetching todos:", error);
		}
	};

	useEffect(() => {
		fetchToDos();
	}, []);

	return { toDos };
};
