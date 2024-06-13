import {Experience} from "../types.ts";

type Props = {
	xp: Experience
}

export default function ExperienceC ({xp} : Props) {
	return <section className={'mb-5 pt-3 last:mb-0 first:pt-1'}>
		<div className={'flex w-full justify-between items-center'}>
			<h3>{xp.title}</h3>
			<div className={'text-slate-400'}>
				{xp.from} to {xp.to}
			</div>
		</div>
		<div className={''}>
			<div className={'text-slate-600 font-semibold'}>
				{xp.company}
			</div>
		</div>
		<div className={'text-sm'}>
			{xp.description}
		</div>
		<div className={'text-xs font-mono mt-2'}>
			{xp.tags.map((t) => {
				return <span className={'mr-1 rounded bg-gray-100 text-gray-800 py-0.5 px-2'} key={t}>{t}</span>
			})}
		</div>
	</section>
}
