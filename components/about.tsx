'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

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
				Self-taught developer with 3 years of coding experience, embodying autonomy, a
				proactive can-do attitude, and strong problem solving skills. I specialize in
				implementing best practices and ensuring meticulous attention to detail in
				development tasks. Nice to meet you.
			</p>
			<p>I mostly work with React, Nextjs, NestJs and PostreSQL</p>
		</motion.section>
	)
}
