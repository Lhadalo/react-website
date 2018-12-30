import React, { Component } from 'react';
import { connect } from 'react-redux';

// Grommet
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

import ContactIcon from 'grommet/components/icons/base/Contact';
import DeployIcon from 'grommet/components/icons/base/Deploy';


class Home extends Component {
  _getIcon(iconName) {
		switch (iconName) {
			case 'contact': return <ContactIcon />;
			default: return <DeployIcon />;
		}
  }
  
  render() {
    const { nav: { items } } = this.props;
    
    const links = items.map(page => (
      <Tile key={page.label} basis='1/2'>
        <Box margin='large'>
          <Anchor label={page.label} path={page.path} icon={this._getIcon(page.icon)} />
          <Paragraph size='medium'><strong>{page.desc}</strong></Paragraph>
        </Box>
      </Tile>
    ));
    
    return (
        <Section pad={{ horizontal: 'medium', vertical: 'large' }}>
          <Split fixed={false}>
            <Box className='flex-center' pad='medium' >
              <Paragraph>
                <strong>
                Hej, mitt namn är Ola Dahl och är en nyligen examinerad utvecklare. 
                Områden jag just nu tycker är kul är frontend inom React, Android och Flutter.
                Utöver utveckling är musik ett stort intresse, framför allt körsång och piano.
                </strong>
              </Paragraph>
            </Box>
            <Box align='center'>
              <Image size='medium' style={{ borderRadius: '50%' }} src='https://static1.squarespace.com/static/59d5331d017db22ffce4bd4b/5a145f1024a69446c4a32ed6/5bb3a31a0852291822900947/1538499414123/WagonplaneCanSquare-100.jpg?format=1500w' />
            </Box>
          </Split>
          
          <Tiles margin={{ vertical: 'large' }}>
            {links}
          </Tiles>
        </Section>
    );
  }
}

function mapStateToProps(state) {
  return { nav: state.nav };
}

export default connect(mapStateToProps)(Home);
