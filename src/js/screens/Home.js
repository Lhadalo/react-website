import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';

import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';

class Home extends Component {
  render() {
    const { nav: { items } } = this.props;
    
    const links = items.map(page => (
        <Paragraph key={page.label} size='large'>
          <Anchor label={page.label} path={page.path} />
        </Paragraph>
    ));
    
    return (
        <Section>
          <Box align='center'>
              <Headline >
                ola dahl.
              </Headline>
          </Box>
          <Split fixed={false}>
            <Box align='center' direction='column'>
              {links} 
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
        </Section>
    );
  }
}

Home.defaultProps = {
	nav: {
		active: true, // start with nav active
		enabled: true, // start with nav disabled
		responsive: 'multiple'
	}
};

Home.propTypes = {
	nav: PropTypes.shape({
	items: PropTypes.arrayOf(PropTypes.shape({
		path: PropTypes.string,
		label: PropTypes.string
	}))
	})
};

function mapStateToProps(state) {
  return { nav: state.nav };
}

export default connect(mapStateToProps)(Home);
