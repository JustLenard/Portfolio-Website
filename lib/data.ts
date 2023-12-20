import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import chatApplication from '@/public/chatApplication.png'
import webScrappingApp from '@/public/webScrappingApp.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [] as const

export const projectsData = [
	{
		title: 'Chatify',
		description:
			'A full stack chat application. One on one chat and global chat. Notifications. Upload profile pictures.',
		tags: [
			'React',
			'NestJs',
			'PostgreSQL',
			'MUI',
			'Typescript',
			'SocketIO',
			'TypeOrm',
			'AWS S3',
			'OpenAi gpt-4',
		],
		imageUrl: chatApplication,
	},
	{
		title: 'Cover letter creator',
		description:
			'Are you tried of creating cover letters? Use AI to help you create tailormade cover letter in just 3 steps',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'MUI', 'OpenAi gpt-4'],
		// imageUrl: rmtdevImg,
	},
	{
		title: 'Web scrapping App',
		description:
			'Choose what data points to scrape and have the data displayed in a beautiful way. Custom-built, sophisticated sentiment analyzer, unraveling the emotional tone of each article — unveiling whether the text conveys a positive, negative, or neutral message.',
		tags: [
			'React',
			'TypeScript',
			'NodeJs',
			'Puppeteer',
			'Cheerio scrapper',
			'Tailwind',
			'Express',
			'Custom sentiment analyzer',
		],
		imageUrl: webScrappingApp,
	},
] as const

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'TypeOrm',
	'Redux',
	'Express',
	'PostgreSQL',
	'Python',
	'Web Scraping',
] as const
