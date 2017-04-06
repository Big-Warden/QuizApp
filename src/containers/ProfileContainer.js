import React, { Component } from 'react';

class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = props.state;
	}
	render() {
		return (
			<div>
				<p>Total progress: { this.state.progress }</p>
				<p>Earned achievements: { this.state.achievements }</p>
			</div>
		);
	}
}

export default ProfileContainer;