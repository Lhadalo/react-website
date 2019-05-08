import React, { Component } from 'react';

import { navitems } from '../links';

// Grommet
import Anchor from 'grommet/components/Anchor';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Responsive from 'grommet/utils/Responsive';

class Home extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = { };
  }

  componentDidMount() {
    Responsive.start(this._onResponsive);
    window.scrollTo(0, 0);
    
    const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
    console.log(language);
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  render() {
    const style = {
      textDecoration: 'none',
    };

    const boxMargin = {
      marginRight: '100px'
    };

    const links = navitems.map(page => (
      <Tile key={page.label} basis='1/2'>
        <Anchor path={page.path} className='grommetux-anchor--animate-icon' style={style}>
        <Box margin='medium' style={this.state.small ? null : boxMargin}>
          <Anchor tag='span' label={page.label} icon={page.icon} />
          <Paragraph><strong>{page.desc}</strong></Paragraph>
        </Box>
        </Anchor>
      </Tile>
    ));
    
    
    return (
        <Box pad={{ horizontal: 'medium', vertical: 'large' }}>
          <Split fixed={false} showOnResponsive='both'>
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
          
          <Tiles margin={{ top: 'small' }} >
            {links}
          </Tiles>
        </Box>
    );
  }
}

export default Home;
