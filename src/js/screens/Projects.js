import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';
import Section from 'grommet/components/Section';

class Projects extends Component {
	render() {
		return (
      <Section>
        <Box align='center'>
            <Headline >
              ola dahl.
            </Headline>
            <Paragraph size='large'>
              Cras mattis consectetur purus sit amet fermentum. 
              Nullam id dolor id nibh ultricies vehicula ut id elit. 
              Cum sociis natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus.
            </Paragraph>
        </Box>
      </Section>
		);
	}
}

export default Projects;
