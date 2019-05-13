import { SWEDISH } from '../actions/action_languages';

const description = {
	SWEDISH: 'Hej, mitt namn är Ola Dahl och är en nyligen examinerad utvecklare. Områden jag just nu tycker är kul är frontend inom React, Android och Flutter. Utöver utveckling är musik ett stort intresse, framför allt körsång och piano.',
	ENGLISH: 'Hi, my name is Ola Dahl and I am a newly graduated software developer. Things I am interested in right know is fronend in React, Android and Flutter. In my free time I like music, especially singing in a choir and piano.'
};

export function getHomeDescription(locale) {
	switch (locale) {
		case SWEDISH: return description.SWEDISH;
		default: return description.ENGLISH;
	}
}
