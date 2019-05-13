import React from 'react';

import * as translation from '../translation/footer';

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
		const { locale } = this.props;
		return (
			<Box align='center' separator='top' margin='small'>
				<Box direction='row' margin='small' responsive={false}>
					<Anchor 
						onMouseEnter={() => this.setActionText(translation.mailLabel(locale))} 
						onMouseLeave={() => this.resetActionText()}
						href='mailto:oladahl.lel@gmail.com'
						icon={<Mail />} />
					<Anchor 
						onMouseEnter={() => this.setActionText(translation.linkedinkLabel(locale))} 
						onMouseLeave={() => this.resetActionText()}
						href='https://www.linkedin.com/in/ola-dahl-245209139/'
						target='_blank'
						icon={<LinkedIn />} />
					<Anchor 
						onMouseEnter={() => this.setActionText(translation.githubLabel(locale))} 
						onMouseLeave={() => this.resetActionText()}
						href='https://github.com/Lhadalo'
						target='_blank'
						icon={<Github />} />
				</Box>
				<Box margin={{ bottom: 'medium' }}>
					{this.state.actionText && <span>{this.state.actionText}</span>}
				</Box>
				
			</Box>
		);
	}
}

export default Footer;
