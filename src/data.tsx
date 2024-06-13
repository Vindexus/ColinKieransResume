import {Experience, Project} from "./types.ts";

const JS = 'JavaScript'
const TS = 'TypeScript'
const SQL = 'SQL'
const React = 'React'
const Express = 'Express'
const Angular = 'Angular'
const Mongo = 'MongoDB'
const Postgres = 'Postgres'
const NodeJS = 'Node'
const Vue = 'VueJS'
const PHP = 'PHP'

export const projects : Project[] = [
	{
		name: 'GuessThePokemon.com',
		description: 'React game where you guess the Pokémon from an obscured image.',
	},
	{
		name: 'DarkProphecies.com',
		description: 'A physical card game I made that is available as print-on-demand product.'
	},
	{
		name: 'ClimateLetter.ca',
		description: 'A website that allows Canadians to send a letter to their MP about climate change.',
	},
	{
		name: "WatchersEyeSearch.com",
		description: `A tool for the game Path of Exile to search the for specific items for trade.`,
	}
]

export const experience : Experience[] = [
	{
		title: 'Senior Full Stack Developer',
		company: 'ShareWares',
		from: 'May 2021',
		to: 'Present',
		tags: [TS, React, "MySQL", Express, "AWS", "CI/CD"],
		description: `I am the tech lead of a small team that is building a web app for managing returnable cups and containers. Since I started I have been mentoring a junior developer and upgrading the existing infrastructure. We currently use NodeJS, React, and MySQL with AWS. I moved our codebase to TypeScript and added an automated testing suite.`
	},
	{
		title: 'Mentor',
		company: 'Lighthouse Labs',
		from: '2022',
		to: '2024',
		tags: [JS, React, Express, SQL, "Ruby on Rails"],
		description: `As a Mentor I was on call to help students of the coding bootcamp with the material and their projects. I helped them understand, debug, refactor, and refine their code. I would answer their questions and explain the code. I also worked as second level support for mentors who needed extra help with students.`
	},
	{
		title: 'Software Developer',
		company: 'Monstercat',
		from: 2016,
		to: 2020,
		tags: ['Golang', NodeJS, React, Vue, TS, Mongo, Postgres],
		description: <><p>I worked as part of a 6 person tech team to build custom software for managing all aspects of a music label. We used peer reviewed and test driven code to handle music players, subscription services, music meta data management. I was responsible for much of the requirement gathering with the non-technical teams.</p></>
	},
	{
		title: 'Co-Founder & Developer',
		company: 'Visual Core LLC',
		from: 2016,
		to: 2019,
		tags: [Angular, NodeJS, Mongo, Postgres, "Firebase"],
		description: `I co-founded this company to create unique online streaming events. Our main product was a show called Streamer Showdown. Streaming influencers and a host would play game show style games in their browsers, and the event was streamed live. I was the main developer and also lead a small team of remote developers.`
	},
	{
		title: 'Coordinator, CEO, Developer',
		company: 'WellPlayed Productions LLC',
		from: 2011,
		to: 2015,
		tags: ["Ruby on Rails", Angular, PHP, "Firebase"],
		description: <>In 2011 I co-founded WellPlayed Productions LLC, an esports production company, with other passionate
			gamers from around the world. I had many roles including junior developer, development coordinator, and later Chief Executive Officer.</>
	}
]
