import React from 'react';

import Box from 'grommet/components/Box';

import Anchor from 'grommet/components/Anchor';

import LinkedIn from 'grommet/components/icons/base/SocialLinkedinOption';
import Github from 'grommet/components/icons/base/SocialGithub';
import Mail from 'grommet/components/icons/base/Mail';

class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			actionText: null
		};
	}

	setActionText(action) {
		this.setState({
			actionText: action
		});
	}

	resetActionText() {
		this.setState({
			actionText: null
		});
	}

	render() {
		return (
			<Box align='center' separator='top' margin='small'>
				<Box direction='row' margin='small' responsive={false}>
					<Anchor 
						onMouseEnter={() => this.setActionText('Skicka mig ett mail')} 
						onMouseLeave={() => this.resetActionText()}
						href='mailto:oladahl.lel@gmail.com'
						icon={<Mail />} />
					<Anchor 
						onMouseEnter={() => this.setActionText('Lägg till mig på LinkedIn')} 
						onMouseLeave={() => this.resetActionText()}
						href='https://www.linkedin.com/in/ola-dahl-245209139/'
						target='_blank'
						icon={<LinkedIn />} />
					<Anchor 
						onMouseEnter={() => this.setActionText('Min GitHub-sida')} 
						onMouseLeave={() => this.resetActionText()}
						href='https://github.com/Lhadalo'
						target='_blank'
						icon={<Github />} />
				</Box>
				{this.state.actionText && <span>{this.state.actionText}</span>}
			</Box>
		);
	}
}

export default Footer;
