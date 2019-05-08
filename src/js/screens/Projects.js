import React, { Component } from 'react';
import _ from 'lodash';

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
      projects: [
        { 
          title: 'React Webbsida', 
          desc: 'Jag har länge haft en tanke på att skapa en personlig sida. Tanken är att denna sidan ska utvecklas med tiden.', 
          links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/react-website' }] 
        },
        {
          title: 'Hooky', 
          desc: 'Under vårterminen 2017 gjorde vi projekt ute på företag med skolan. Vi var ett gäng som gjorde en webbsida i React åt Djäkne i Malmö. Sidan fungerade som en inspirationsplatform, där producenter kunde lägga upp matprodukter.', 
          links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/projekt2-p16' }] 
        },
        {
          title: 'Föreställningsrapport',
          desc: 'Jag gjorde en enkel app för att skicka en formaterad rapport som SMS till ett antal mottagare. Denna appen användes av Parkteatern i Stockholm under vissa av deras föreställningar. Appen är skriven i Kotlin och använder Realm som databas.',
          links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/rapportering' }]
        }
      ],
      small: false,
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
    return _.map(this.state.projects, (project, index) => (
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
    return _.map(this.state.projects, (project, index) => (
      <ListItem 
        key={index} 
        direction='column' 
        align='start'
        pad={{ vertical: 'medium' }}>
        <Box 
        direction='row' 
        full={{ horizontal: true }} 
        justify='between' 
        responsive={false} 
        style={this.state.small ? null : { maxWidth: '576px' }}>
          <h4 style={{ marginBottom: '14px' }}>{<strong>{project.title}</strong>}</h4>
          <p style={{ marginBottom: '14px', marginTop: '0', fontWeight: '400' }}>2012-2015</p>
        </Box>
        <p style={{ marginBottom: '14px', marginTop: '0', fontWeight: '400' }}>Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus.</p>
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
