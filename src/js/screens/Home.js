import React, { Component } from 'react';

import { getLinksContent } from '../translation/links';
import { getHomeDescription } from '../translation/home';

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

  componentWillMount() {
    window.scrollTo(0, 0);
  }
  
  componentDidMount() {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  render() {
    const navLinks = getLinksContent(this.props.locale);
    const desciption = getHomeDescription(this.props.locale);

    const style = {
      textDecoration: 'none',
    };

    const boxMargin = {
      marginRight: '100px'
    };

    const links = navLinks.map(page => (
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
                  {desciption}
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
