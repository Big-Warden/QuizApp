import React, { Component } from "react";

import HeaderBar from "../components/HeaderBar";
import FooterBar from "../components/FooterBar";

class AppContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<HeaderBar />
					<div className="main">
						{ this.props.children }
					</div>
				<FooterBar />
			</div>
		);
	}

}

/*

{ console.log(this.getState()) }

{this.props.children}
AppContainer.propTypes = {
	children: React.PropTypes.object
};
 { console.log(this.props.children) }
console.log(props);

*/

export default AppContainer;