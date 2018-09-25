import React, { Component } from 'react';
import ProjectItem from "./project-item";

class Project extends Component {
	render() {
		const projectItems = this.props.projects.map(project => {
			return (
				<ProjectItem projects={project} />
			);
		})
		return (
			<div className="LandingPage">
				{projectItems}
			</div>
		);
	}
}

export default Project;
