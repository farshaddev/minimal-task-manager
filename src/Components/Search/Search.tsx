import React, { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import "./Search.scss";

interface SearchProps {
	title: string;
	onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ title, onSearch }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onSearch(event.target.value);
	};

	return (
		<div className="search">
			<CiSearch />
			<input
				type="text"
				className="search-input"
				placeholder="search here ..."
				onChange={handleChange}
				value={title}
			/>
		</div>
	);
};

export default Search;
