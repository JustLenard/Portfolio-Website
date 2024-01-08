'use client'

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
	const { ref } = useSectionInView('About')

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				Hey there! I am a proactive problem solver with a can-do attitude and strong problem
				solving skills. I specialize in implementing best practices and ensuring meticulous
				attention to detail in development tasks.
			</p>
			<p>
				Outside work, I usually like spending my time reading, playing video games or
				watching some youtube.
			</p>
			<p>Nice to meet you! Feel free to contact me.</p>
		</motion.section>
	)
}
