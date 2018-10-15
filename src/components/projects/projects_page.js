import React from 'react';

class Projects extends React.Component {

	renderProjectsDescription() {
		return (
			<div className="text-center">
				<h2>projects</h2>
				<hr/>
			</div>
		)
	}

	render() {
		return (
			<div className="wrapper">
				{this.renderProjectsDescription()}
			</div>
		);
	}
}

export default Projects;