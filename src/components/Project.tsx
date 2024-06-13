import {Project} from "../types.ts";

type Props = {
	project: Project
}

export default function ProjectC ({project} : Props) {
	return <div className={'pb-3 mb-3 border-b border-emerald-200 last:border-b-0'}>
		<h3 className={'text-gray-600 text-md'}>{project.name}</h3>
		{project.link && <div className={'underline'}>{project.link}</div>}
		<div className={'text-xs'}>{project.description}</div>
	</div>
}
