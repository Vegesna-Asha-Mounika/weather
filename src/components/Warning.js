import React from "react";
import "../Styles/Warning.css";

function Warning() {
	return (
		<div className="warning">
			<h2>No Location Found</h2>
			<p>Try informing City/Town and State/Country</p>
			<p>Ex: Texas, Dallas, Frisco etc</p>
		</div>
	);
}

export default Warning;
