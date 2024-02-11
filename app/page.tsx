import ParticlesContainer from '@/components/ParticlesContainer'
import TypingSequence from '@/components/TypingSequence'
import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<div className="w-full">
				<div className="flex flex-col items-center px-4 relative ">
					<ParticlesContainer />
					<TypingSequence />
					<Intro />
					<SectionDivider />
					<About />
				</div>
			</div>
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	)
}
