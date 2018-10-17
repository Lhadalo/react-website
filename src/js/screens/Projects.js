import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Split from 'grommet/components/Split';

class Projects extends Component {
	render() {
		return (
			<Box pad='medium'>
          <Box align='center'>
            <Headline >
              ola dahl.
            </Headline>
          </Box>
          
          <Split>
            <Box align='center' direction='column'>
                <Paragraph>Hej</Paragraph> 
                <Paragraph>Hej</Paragraph> 
                <Paragraph>Hej</Paragraph> 
            </Box>

            <Box align='center'>
              <Paragraph size='large'>
                Cras mattis consectetur purus sit amet fermentum. 
                Nullam id dolor id nibh ultricies vehicula ut id elit. 
                Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus.
              </Paragraph>
            </Box>
          </Split>
        </Box>
		);
	}
}

export default Projects;
