import React, { Component } from 'react';

class ProjectItem extends Component {
	render() {
		return (
			<li>
				<strong>{this.props.projects.name}</strong> - {this.props.projects.category}
			</li>
		);
	}
}

export default ProjectItem;
