import {ReactNode} from "react";

export type Experience = {
	from: string | number
	to: string | number
	title: string
	company: string
	tags: string[]
	description: ReactNode
}

export type Project = {
	name: string
	description: string
	link?: string
	tags?: string[]
}
