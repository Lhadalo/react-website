import React, { Component } from 'react';
import _ from 'lodash';
import * as translation from '../translation/project';
// Grommet
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor';
import Responsive from 'grommet/utils/Responsive';

import GithubLogo from 'grommet/components/icons/base/SocialGithub';
import DownloadIcon from 'grommet/components/icons/base/DocumentPdf';

class Projects extends Component {
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {
      small: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    Responsive.start(this._onResponsive);
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  _renderProjectItems() {
    const projects = translation.projects(this.props.locale);
    return _.map(projects, (project, index) => (
      <ListItem 
        key={index} 
        direction='column' 
        align='start'
        pad={{ vertical: 'medium' }}>
        <h4 style={{ marginBottom: '14px' }}>{<strong>{project.title}</strong>}</h4>
        <p style={{ marginBottom: '14px', marginTop: '0', fontWeight: '400' }}>{project.desc}</p>
        <Box direction='row'>
        {_.map(project.links, link => (
          <Anchor 
            style={{ marginRight: '30px' }} 
            key={link.linkSrc} 
            label={link.linkName} 
            icon={<GithubLogo size='small' />} 
            target='_blank' 
            href={link.linkSrc} />
        ))}
        </Box>
      </ListItem>
    ));
  }

  _renderCVItems() {
    const CV = translation.cv(this.props.locale);
    return _.map(CV, (cvItem, index) => (
      <ListItem 
        key={index} 
        direction='column' 
        align='start'
        pad={{ vertical: 'small' }}>
        <Box 
        direction='row' 
        full={{ horizontal: true }} 
        justify='between' 
        responsive={false} 
        style={this.state.small ? null : { maxWidth: '576px' }}>
          <h4 style={{ marginBottom: '14px' }}>{<strong>{cvItem.title}</strong>}</h4>
          <p style={{ marginBottom: '14px', marginTop: '0', fontWeight: '400' }}>{cvItem.years}</p>
        </Box>
        <p style={{ marginBottom: '14px', marginTop: '0', fontWeight: '400' }}>{cvItem.desc}</p>
      </ListItem>
    ));
  }

	render() {
    const { locale } = this.props;
		return (
      <Section pad='medium'>
        <Box pad='medium'>
            <span>{translation.pageTitle(locale)}</span>
        </Box>
        <Box pad='medium'>
            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}><strong>Projekt</strong></h3>
            <List>
              {this._renderProjectItems()}
            </List>
        </Box>

        <Box pad='medium'>
            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}><strong>Resumé</strong></h3>
            {this._renderCVItems()}
        </Box>

        <Box pad='medium' align='center'>
            <Anchor 
              label={translation.CVLabel(locale)} 
              href={translation.pdfUrl(locale)}
              target='_blank'
              icon={<DownloadIcon />}
              />
        </Box>
      </Section>
		);
	}
}

export default Projects;
