import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Loader from "./components/Loader";
import Warning from "./components/Warning";
import Weather from "./components/Weather";
import "./Styles/App.css";

function App() {
	return (
		<div className="App">
			<div className="App_container">
				<Header />
				<Search />
				<Weather />
				<Loader />
				<Warning />
			</div>
		</div>
	);
}

export default App;
