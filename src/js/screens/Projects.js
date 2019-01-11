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
        { 
          title: 'React Webbsida', 
          desc: 'Jag har länge haft en tanke på att skapa en personlig sida. Tanken är att denna sidan ska utvecklas med tiden och jag har planer på att lägga till funktioner framöver. Sidan är byggd i React och har fungerat lite som ett projekt för att lära mig detta verktyg.', 
          links: [{ linkName: 'Github Länk', linkSrc: 'https://github.com/Lhadalo/react-website' }] 
        },
        {
          title: 'Hooky', 
          desc: 'Under vårterminen 2017 gjorde vi projekt ute på företag med skolan. Vi var ett gäng som gjorde en webbsida i React åt Djäkne i Malmö. Sidan fungerade som en inspirationsplatform, där producenter kunde lägga ut matprodukter som de ville promota. Detta var min första inblick i React och jag tyckte det var väldigt kul att arbeta i.', 
          links: [{ linkName: 'Github Länk', linkSrc: 'https://github.com/Lhadalo/projekt2-p16' }] 
        },
        {
          title: 'Föreställningsrapport',
          desc: 'Jag gjorde en enkel app för att skicka en formaterad rapport som SMS till ett antal mottagare. Denna appen användes av Parkteatern i Stockholm under vissa av deras föreställningar. Appen är skriven i Kotlin och använder Realm som databas.',
          links: [{ linkName: 'Github Länk', linkSrc: 'https://github.com/Lhadalo/rapportering' }]
        }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
