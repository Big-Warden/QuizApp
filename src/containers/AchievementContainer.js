import React, { Component } from 'react';

class AchievementContainer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				Your achievements: {this.props.achievements}
			</div>
		);
	}
}

export default AchievementContainer;