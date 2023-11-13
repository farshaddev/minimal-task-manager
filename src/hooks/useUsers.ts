import axios from "axios";
import { useState, useEffect } from "react";
import { UserType } from "../types/user";

interface UseUsersResult {
	users: UserType[];
	loading: boolean;
}

export const useUsers = (): UseUsersResult => {
	const [users, setUsers] = useState<UserType[]>([]);
	const [loading, setLoading] = useState(true);

	const fetchUsers = async () => {
		try {
			const response = await axios.get<UserType[]>(
				"https://jsonplaceholder.typicode.com/users"
			);

			if (response.data) {
				setUsers(response.data);
			}
		} catch (error) {
			console.error("Error fetching users:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return { users, loading };
};
