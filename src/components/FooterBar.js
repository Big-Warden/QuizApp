import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class FooterBar extends Component {
	render() {
		return (
			<footer>
				<p>
					<Link to={"/contact"}>| Contact |</Link>
					<Link to={"/terms"}> Terms of service |</Link>
					<Link to={"/privacy"}> Privacy policy |</Link>
				</p>
			</footer>
		);
	}
}