import axios from "axios";
import { useState, useEffect } from "react";
import { todoType } from "../types/todo";

interface UseToDosResult {
	toDos: todoType[];
	loading: boolean;
}

export const useToDos = (): UseToDosResult => {
	const [toDos, setToDos] = useState<todoType[]>([]);
	const [loading, setLoading] = useState(true);

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
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchToDos();
	}, []);

	return { toDos, loading };
};
