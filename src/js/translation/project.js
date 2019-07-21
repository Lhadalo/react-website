import { SWEDISH } from '../actions/action_languages';

const myProjects = {
	ENGLISH: [
			{ 
				title: 'React Website', 
				desc: 'This website. I have wanted to create a personal website. This website will evolve and get new functionality over time.', 
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/react-website' }] 
			},
			{
				title: 'Hooky', 
				desc: 'During spring 2017 we did a school project at Djäkne Startup. We were some people that developed a website in React. The website worked as a inspiration-platform where companies could submit food products.', 
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/Hooky' }] 
			},
			{
				title: 'Show Report',
				desc: 'I made a simple app to send formatted text as a report for multiple recipients. This app was used by Parkteatern in Stockholm during some of their performances. The app is written in Kotlin and uses Realm as a database.',
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/rapportering' }]
			},
			{
				title: 'Stage Manager',
				desc: 'English Description',
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/stage-manager' }]
			},
			{
				title: 'Numerare',
				desc: 'Svensk Beskrivning',
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/numerare' }]
			},
		],
	SWEDISH: [
			{ 
				title: 'React Webbsida', 
				desc: 'Jag har länge haft en tanke på att skapa en personlig sida. Tanken är att denna sidan ska utvecklas med tiden.', 
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/react-website' }] 
			},
			{
				title: 'Hooky', 
				desc: 'Under vårterminen 2017 gjorde vi projekt ute på företag med skolan. Vi var ett gäng som gjorde en webbsida i React åt Djäkne i Malmö. Sidan fungerade som en inspirationsplatform, där producenter kunde lägga upp matprodukter.', 
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/Hooky' }] 
			},
			{
				title: 'Föreställningsrapport',
				desc: 'Jag gjorde en enkel app för att skicka en formaterad rapport som SMS till ett antal mottagare. Denna appen användes av Parkteatern i Stockholm under vissa av deras föreställningar. Appen är skriven i Kotlin och använder Realm som databas.',
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/rapportering' }]
			}, 
			{
				title: 'Stage Manager',
				desc: 'Svensk Beskrivning',
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/stage-manager' }]
			},
			{
				title: 'Numerare',
				desc: 'Svensk Beskrivning',
				links: [{ linkName: 'Github', linkSrc: 'https://github.com/Lhadalo/numerare' }]
			},
			
		],
};

const myCV = {
	ENGLISH: [
		{
			title: 'Djäkne Startup Studio, Malmö',
			desc: 'Developed a webpage for Djäkne Startup Studio in the summer. This gave me insight into communication with clients.',
			years: '2017-2017'
		},
		{
			title: 'Malmö University, Malmö',
			desc: 'Lab Supervisor in the laboratory part of the Java education, for the first-year students.',
			years: '2016-2017'
		},
		{
			title: 'Malmö University, Malmö',
			desc: 'Bachelor’s degree in computer science, after studies at the program Computer Science and Application development.',
			years: '2015-2019'
		},
		{
			title: 'Musik i Syd/Dansstationen, Malmö',
			desc: 'Worked as an audience host, at the concert house Palladium in Malmö. Gave me experience in consumer contact and stress management.',
			years: '2012-2018'
		},
		{
			title: 'Lunds University, Lund',
			desc: 'Studies in philosophy at the course Philosophy: Core Studies in the Arts and Sciences.',
			years: '2011-2012'
		},
		{
			title: 'Sundsgården College, Helsingborg',
			desc: 'Studies in classical trombone at the music program at Sundsgården College.',
			years: '2010-2011'
		},
		{
			title: 'Lars-Erik Larsson High School, Lund',
			desc: 'Natural sciences’ programme with a music profile.',
			years: '2007-2010'
		},
	],
	SWEDISH: [
		{
			title: 'Djäkne Startup Studio, Malmö',
			desc: 'Utveckling av webbsida för Djäkne Startup Studio under sommaren 2017. Gett inblick i utmaningarna vid utveckling för konsument.',
			years: '2017-2017'
		},
		{
			title: 'Malmö Universitet, Malmö',
			desc: 'Labbhandledare i laborationsdelen av utbildningen inom Java för förstaårsstudenterna.',
			years: '2016-2017'
		},
		{
			title: 'Malmö Universitet, Malmö',
			desc: 'Kandidatexamen i datavetenskap efter studier på programmet Datavetenskap och Applikationsutveckling.',
			years: '2015-2019'
		},
		{
			title: 'Musik i Syd/Dansstationen, Malmö',
			desc: 'Arbete som foajévärd på konserthuset Palladium. Medfört erfarenhet i konsumentkontakt samt hantering av stress.',
			years: '2012-2018'
		},
		{
			title: 'Lunds Universitet, Lund',
			desc: 'Studier i vetenskapshistoria på kursen Vetenskaplig grundkurs på filosofiska institutionen. Medfört kritiskt tänkande samt erfarenhet i läsning av akademiska texter.',
			years: '2011-2012'
		},
		{
			title: 'Sundsgårdens Folkhögskola, Helsingborg',
			desc: 'Utbildning i klassisk trombon på Sundsgårdens musiklinje.',
			years: '2010-2011'
		},
		{
			title: 'Lars-Erik Larsson-gymnasiet, Lund',
			desc: 'Naturvetenskapligt program med musikprofil.',
			years: '2007-2010'
		},
	]
};

export const pageTitle = locale => (locale === SWEDISH 
	? 'Några projekt som jag har arbetat med under studietiden.' 
	: 'Personal projects that I have done during my studies');

export const CVLabel = locale => (locale === SWEDISH
	? 'Ladda ned mitt CV'
	: 'Download my CV');

export const projects = locale => (locale === SWEDISH ? myProjects.SWEDISH : myProjects.ENGLISH);
export const cv = locale => (locale === SWEDISH ? myCV.SWEDISH : myCV.ENGLISH);
export const pdfUrl = locale => (locale === SWEDISH ? 'swedishURL' : 'englishURL');
