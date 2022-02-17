import React from "react";
import "../Styles/Weather.css";

export default function Weather({ weatherInfo, location, date }) {
	return (
		<div className="weather">
			<div className="weather_info">
				<img
					className="weather-icon"
					src={
						"https://openweathermap.org/img/wn/" +
						weatherInfo.current.weather[0].icon +
						".png"
					}
					alt="{weatherInfo.current.weather[0].main}"
				/>
				<ul className="weather_list">
					<li className="temp_list">
						{Math.round(weatherInfo.current.temp)}
						<sup className="temp_symbol">°F</sup>
					</li>
					<li> Humidity: {weatherInfo.current.wind_speed}%</li>
					<li>
						{" "}
						Wind: {Math.round(
							weatherInfo.current.wind_speed * 3.6
						)}{" "}
						km/h{" "}
					</li>
				</ul>
			</div>

			<div className="weather2_info">
				<h2 className="city_info">
					{location.city || location.town},{" "}
					{location.state || location.country.toUpperCase()}
				</h2>
				<h3 className="day_info">{date}</h3>
				<h3 className="description_info">
					{weatherInfo.current.weather[0].description}
				</h3>
			</div>
		</div>
	);
}
