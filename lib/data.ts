import chatApplication from '@/public/chatApplication.png'
import coverLetterCreator from '@/public/coverLetterCreator.png'
import webScrappingApp from '@/public/webScrappingApp.png'
import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaAws, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoDocker, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5'
import { LuGraduationCap } from 'react-icons/lu'
import {
	SiAntdesign,
	SiExpress,
	SiJest,
	SiMui,
	SiNestjs,
	SiPostgresql,
	SiRedux,
	SiSelenium,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandSocketIo } from 'react-icons/tb'
import { ProjectData, Skill } from './types'

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

export const experiencesData = [
	{
		title: 'Self thougth developer',
		location: 'The Odin Project',
		description: 'Self thought',
		icon: React.createElement(LuGraduationCap),
		date: '2021 - 2022',
	},
	{
		title: 'Full Stack Developer',
		location: 'Tara Interactive',
		description:
			'I got hired as a front-end developer but quite quickly transitioned to full stack. I worked 1.5 years here',
		icon: React.createElement(CgWorkAlt),
		date: '2022 - 2023',
	},
	{
		title: 'React / React native developer',
		location: 'RoyalRoad',
		description: 'Contributed to the development of the RoaylRoad mobile application.',
		icon: React.createElement(FaReact),
		date: '2023 - present',
	},
]

export const projectsData: ProjectData[] = [
	{
		title: 'Chatify',
		description:
			'A full-stack chat application with the following features: one-on-one and global chat, notifications, and the ability to upload profile pictures to AWS S3.',
		tags: [
			'Typescript',
			'React',
			'NestJs',
			'MUI',
			'PostgreSQL',
			'TypeOrm',
			'Socket.io',
			'AWS S3',
			'gpt-4 API',
		],
		imageUrl: chatApplication,
		github: 'https://github.com/JustLenard/webSocketApp',
		live: 'https://chatify-app.up.railway.app',
	},
	{
		title: 'AI cover letter creator',
		description:
			'Are you tired of creating cover letters? Use AI (GPT-4) to help you create a job-specific, tailor-made cover letter in just 3 easy steps.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'MUI', 'OpenAi gpt-4'],
		imageUrl: coverLetterCreator,
		github: 'https://github.com/JustLenard/CoverLetterCreator',
		live: 'https://ai-cover-letter-creator.up.railway.app',
	},
	{
		title: 'Web scrapping App',
		description:
			'Scrape and visualize data points from articles, and evaluate the sentiment of the articles.',
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
		github: 'https://github.com/JustLenard/WebScrappingApi',
	},
]

export const skillsData: Skill[] = [
	{
		name: 'JavaScript',
		icon: IoLogoJavascript,
	},
	{
		name: 'TypeScript',
		icon: SiTypescript,
	},
	{
		name: 'React',
		icon: FaReact,
	},
	{
		name: 'Next.js',
		icon: TbBrandNextjs,
	},
	{
		name: 'Redux',
		icon: SiRedux,
	},
	{
		name: 'Node.js',
		icon: IoLogoNodejs,
	},
	{
		name: 'Express',
		icon: SiExpress,
	},
	{
		name: 'NestJs',
		icon: SiNestjs,
	},
	{
		name: 'HTML',
		icon: FaHtml5,
	},
	{
		name: 'CSS',
		icon: IoLogoCss3,
	},
	{
		name: 'Tailwind',
		icon: SiTailwindcss,
	},
	{
		name: 'MUI',
		icon: SiMui,
	},
	{
		name: 'AntD',
		icon: SiAntdesign,
	},
	{
		name: 'Git',
		icon: FaGithub,
	},
	{
		name: 'PostgreSQL',
		icon: SiPostgresql,
	},
	{
		name: 'TypeOrm',
	},
	{
		name: 'Python',
		icon: FaPython,
	},
	{
		name: 'Docker',
		icon: IoLogoDocker,
	},
	{
		name: 'AWS',
		icon: FaAws,
	},
	{
		name: 'Web Scraping',
		icon: SiSelenium,
	},
	{
		name: 'Web Sockets',
		icon: TbBrandSocketIo,
	},
	{
		name: 'Unit testing',
		icon: SiJest,
	},
]
