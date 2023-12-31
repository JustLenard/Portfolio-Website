'use client'

import { useTheme } from '@/context/theme-context'
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { Engine } from 'tsparticles-engine'

export const ParticlesContainer = () => {
	const { theme } = useTheme()

	console.log('This is theme', theme)

	// this customizes the component tsParticles installation
	const customInit = useCallback(async (engine: Engine) => {
		// this adds the bundle to tsParticles
		await loadFull(engine)
	}, [])

	const particlesLoaded = useCallback(async () => {}, [])

	return (
		<Particles
			className="w-[100vw] h-full absolute z-0"
			id="tsparticles"
			options={{
				fullScreen: { enable: false },
				background: {
					color: {
						value: '',
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
							mode: 'push',
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 90,
						},
						repulse: {
							distance: 100,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: theme === 'dark' ? '#a1afe9' : '#6e112d',
					},
					links: {
						color: theme === 'dark' ? '#93d6f5' : '#d32ba1',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1000,
						},
						value: 80,
					},
					opacity: {
						value: 0.25,
					},
					// shape: {
					// 	type: 'circle',
					// },
					size: {
						value: {
							min: 1,
							max: 5,
						},
					},
				},
				detectRetina: true,
			}}
			init={customInit}
			loaded={particlesLoaded}
		/>
	)
}

export default ParticlesContainer
