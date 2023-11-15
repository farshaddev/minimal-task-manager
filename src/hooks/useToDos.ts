import axios from "axios";
import { useState, useEffect } from "react";
import { TodoType } from "../types/todo";

interface UseToDosResult {
	toDos: TodoType[];
	loading: boolean;
}

export const useToDos = (): UseToDosResult => {
	const [toDos, setToDos] = useState<TodoType[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchToDos = async () => {
		try {
			const response = await axios.get<TodoType[]>(
				"https://jsonplaceholder.typicode.com/todos"
			);

			if (response.data) {
				setToDos(response.data);
			}
		} catch (error) {
			console.error("Error fetching todos:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchToDos();
	}, []);

	return { toDos, loading };
};
