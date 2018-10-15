import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
	render() {
		return(
			<div className="navigation-bar">
				<Link to="/" className="nav-item logo">
					ola dahl
				</Link>

				<div className="DesktopOnly">
					<Link to="/posts" className="nav-item">
						thoughts
					</Link>

					<Link to="/photos" className="nav-item">
						photos
					</Link>

					<Link to="/projects" className="nav-item">
						projects
					</Link>
					
					<Link to="/contact" className="nav-item">
						contact
					</Link>
				</div>
			</div>
		);
	}
}

export default Navigation;