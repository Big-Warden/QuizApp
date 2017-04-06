import React, { Component } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	render() {
		return (
			<header>
				<div className="headercontent">
					<h1><Link to="/">Learn stuff!</Link></h1>
					<Navigation />
				</div>	
			</header>
		);
	}
}
