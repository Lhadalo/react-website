import React from 'react';

import Box from 'grommet/components/Box';

import Anchor from 'grommet/components/Anchor';

import LinkedIn from 'grommet/components/icons/base/SocialLinkedinOption';
import Github from 'grommet/components/icons/base/SocialGithub';
import Mail from 'grommet/components/icons/base/Mail';

const Footer = () => (
	<Box align='center' separator='top' margin={{ horizontal: 'medium' }}>
		<Box direction='row' margin='small' responsive={false}>
			<Anchor icon={<Mail />} />
			<Anchor icon={<LinkedIn />} />
			<Anchor icon={<Github />} />
		</Box>
	</Box>
);

export default Footer;
