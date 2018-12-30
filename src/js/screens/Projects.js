import React, { Component } from 'react';
import _ from 'lodash';

// Grommet
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor';

import GithubLogo from 'grommet/components/icons/base/SocialGithub';
import DownloadIcon from 'grommet/components/icons/base/DocumentPdf';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        { title: 'React Website', desc: 'Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.', links: [{ linkName: 'Github Link', linkSrc: 'https://github.com/Lhadalo/react-website' }] },
        { title: 'Numerare Android App', desc: 'Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.', links: [{ linkName: 'Github Link', linkSrc: '#' }] },
        { title: 'Thesis Apps', desc: 'Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor.', links: [{ linkName: 'Github Link (Android SDK)', linkSrc: '#' }, { linkName: 'Github Link (Flutter)' }] },
      ]
    };
  }


  _renderListItems() {
    const style = {
      marginRight: '30px'
    };

    return _.map(this.state.projects, (project, index) => (
      <ListItem 
        key={index} 
        direction='column' 
        align='start' 
        
        pad={{ vertical: 'small' }}>
        <span><strong>{project.title}</strong></span>
        <p>{project.desc}</p>
        <Box direction='row'>
        {_.map(project.links, link => (
          <Anchor 
            style={style} 
            key={link.linkSrc} 
            label={link.linkName} 
            icon={<GithubLogo />} 
            target='_blank' 
            href={link.linkSrc} />
        ))}
        </Box>
      </ListItem>
    ));
  }

	render() {
		return (
      <Section pad='medium'>
        <Box pad='medium'>
            <span>Personliga projekt som jag har arbetat med, mest på min fritid.</span>
        </Box>
        <Box pad='medium'>
            <h4><strong>Projekt</strong></h4>
            <List>
              {this._renderListItems()}
            </List>
        </Box>

        <Box pad='medium'>
            <h4><strong>CV</strong></h4>
      
        </Box>

        <Box pad='medium' align='center'>
      
            <Anchor 
              label='Ladda ned mitt CV som PDF' 
              href='https://firebasestorage.googleapis.com/v0/b/oladahl-website.appspot.com/o/Liten_uppgift_i_textanalys_DAHL_OLA.pdf?alt=media&token=96cce8ea-8f5b-4e2e-b723-7101959d745e'
              target='_blank'
              icon={<DownloadIcon />}
              />
        </Box>
      </Section>
		);
	}
}

export default Projects;
