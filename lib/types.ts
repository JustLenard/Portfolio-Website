import { StaticImageData } from 'next/image'
import { links } from './data'
import { IconType } from 'react-icons'

export type SectionName = (typeof links)[number]['name']

export type ProjectData = {
	title: string
	description: string
	tags: string[]
	imageUrl: StaticImageData
	github: string
	live?: string
}

export type Skill = {
	name: string
	icon?: IconType
}
