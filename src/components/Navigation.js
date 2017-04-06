import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
	render() {
		return (
			<nav>	
				<Link to={"/about"}>About</Link>
				<Link to={"/lol"}>Random</Link>				
			</nav>
		);
	}
}
