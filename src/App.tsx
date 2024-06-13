import {experience, projects} from "./data.tsx";
import ExperienceC from "./components/Experience.tsx";
import Project from "./components/Project.tsx";

function App() {
  return (
    <div id={'resume'} className={'mx-auto print:h-screen grid grid-cols-[260px,1fr]'}>
			<div className={'p-5 bg-slate-100 flex flex-col justify-between'}>
				<div>
					<h1 className={'text-emerald-500 text-3xl'}>Colin Kierans</h1>
					<div className={'flex flex-col'}>
						<div className={'font-semibold'}>Full Stack Web Developer</div>
						<div>Vancouver, BC</div>
						<a href={'https://colinkierans.com'} className={'text-emerald-600'}>colinkierans.com</a>
						<a href={'mailto:colinkierans@gmail.com'} className={'text-emerald-600'}>colinkierans@gmail.com</a>
					</div>
					<div className={'text-sm mt-4 text-justify'}>
						<p>I'm a full stack developer from Canada who loves mentoring, learning new skills, and writing automated tests. I have been working in web development since I graduated from Thompson Rivers University in 2007.</p>
						<p>I love all types of games. If I'm not playing them, I'm probably creating my own or building a project based around them.</p>
					</div>
				</div>
				<div className={'mt-8'}>
					<h2 className={'mb-2'}>Personal Projects</h2>
					<div className={''}>
						{projects.map((project, i) => {
							return <Project key={i} project={project} />
						})}
					</div>
				</div>
			</div>
			<div className={'px-5 py-4'}>
				<h2>Experience</h2>
				<div className={'divide-y divide-emerald-200'}>
					{experience.map((xp, i) => {
						return <ExperienceC key={i} xp={xp} />
					})}
				</div>
			</div>
		</div>
  )
}

export default App
