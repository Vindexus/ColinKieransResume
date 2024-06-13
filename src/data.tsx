import {Experience, Project} from "./types.ts";

const JS = 'JavaScript'
const TS = 'TypeScript'
const SQL = 'SQL'
const React = 'React'
const Express = 'Express'
const Angular = 'Angular'
const Mongo = 'Mongo'
const Postgres = 'Postgres'
const NodeJS = 'Node'
const Vue = 'VueJS'
const PHP = 'PHP'

export const projects : Project[] = [
	{
		name: 'GuessThePokemon.com',
		description: 'React game where you guess the Pokémon from an obscured image',
	},
	{
		name: 'DarkProphecies.com',
		description: 'A physical card game I made that is available as print-on-demand game.'
	},
	{
		name: 'ClimateLetter.ca',
		description: 'A website that allows Canadians to send a letter to their MP about climate change.',
	},
	{
		name: "WatchersEyeSearch.com",
		description: `A tool for the game Path of Exile to search for items with specific mods.`,
	}
]

export const experience : Experience[] = [
	{
		title: 'Senior Full Stack Developer',
		company: 'ShareWares',
		from: 'May 2021',
		to: 'Present',
		tags: [TS, React, SQL, Express],
		description: `I am the tech lead of a small team that is building a web app for managing returnable cups and containers. Since I started I have been mentoring a junior developer and upgrading the existing infrastructure. We currently use NodeJS, sReact, and MySQL with AWS. Since starting I have upgraded our codebase to use TypeScript and added a robust automated testing suite.`
	},
	{
		title: 'Developer Mentor',
		company: 'Lighthouse Labs',
		from: 'Jan 2022',
		to: 'Jun 2024',
		tags: [JS, React, Express, SQL],
		description: `As a mentor I was on call to help students of the coding bootcamp with their work assignments. I helped them understand, debug, refactor, and refine their code. I would answer their questions and explain the code. I also worked as second level support for mentors who need extra help with students.`
	},
	{
		title: 'Software Developer',
		company: 'Monstercat',
		from: 2016,
		to: 2020,
		tags: ['Golang', NodeJS, React, Vue, TS, Mongo, Postgres],
		description: <><p>I worked as part of a 6 person tech team to build custom software for managing all aspects of a music label. We used peer reviewed and test driven code to handle music players, subscription services, music meta data management.</p>
		<p>I was responsible for much of the requirement gathering with the non-technical teams, and building those products</p></>
	},
	{
		title: 'Co-Founder & Developer',
		company: 'Visual Core LLC',
		from: 2016,
		to: 2019,
		tags: [Angular, NodeJS, Mongo, Postgres, "Firebase"],
		description: `I co-founded this company to create unique online streaming events. Our main product was a show called Streamer Showdown, which allowed streaming personalities and a host to play gameshow style games in their browsers. I was the main developer and also lead a small team of remote developers.`
	},
	{
		title: 'Coordinator, CEO, Developer',
		company: 'WellPlayed Productions LLC',
		from: 2011,
		to: 2015,
		tags: ["Ruby on Rails", Angular, PHP, "Firebase"],
		description: <>In 2011 I cofounded WellPlayed Productions LLC, an esports production company, with other passionate
			gamers from around the world. I had many roles including junior developer, to development coordinator, and later as Chief Executive Officer.</>
	}
]
