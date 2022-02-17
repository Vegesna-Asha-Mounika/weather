import react from "react";
import "../Styles/Search.css";

export default function Search() {
	return (
		<div className="search">
			<label className="search_label">
				<input className="search_input" placeholder="Enter city name" />
			</label>
			<button className="search_button"> Search </button>
		</div>
	);
}
