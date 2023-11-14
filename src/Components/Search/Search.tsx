import React, { ChangeEvent } from "react";
import { CiSearch } from "react-icons/ci";
import "./Search.scss";

interface SearchProps {
	onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
	return (
		<div className="search">
			<CiSearch />

			<input
				type="text"
				className="search-input"
				placeholder="search here ..."
				onChange={onSearch}
			/>
		</div>
	);
};

export default Search;
