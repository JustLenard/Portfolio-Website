'use client'

import { getRandomInt } from '@/lib/utils'
import { useRef } from 'react'

const TypingSequence = () => {
	const typeHere = document.querySelector('#animated-text')
	const typeHere2 = document.querySelector('#animated-text2')
	const place1 = document.querySelector('#place1')
	const place2 = document.querySelector('#place2')

	const ref1 = useRef<HTMLHeadingElement | null>(null)
	const ref2 = useRef<HTMLHeadingElement | null>(null)
	const caret1 = useRef<HTMLDivElement | null>(null)
	const caret2 = useRef<HTMLDivElement | null>(null)

	const text = "console.log('"
	const text2 = "Hi, I am Vitalie')"

	const trigger = () => {
		if (!ref1.current || !ref2.current) return

		ref1.current.textContent = ''
		ref2.current.textContent = ''

		let i = 0
		let j = 0

		typingFunction(i, j)
	}

	const typingFunction = (i: number, j: number) => {
		if (!ref1.current || !ref2.current) return

		if (i < text.length) {
			ref1.current.textContent += text[i]
			i++
			setTimeout(() => typingFunction(i, j), getRandomInt(350, 100))
		} else if (j < text2.length) {
			ref1.current.classList.remove('caret')
			ref2.current.classList.add('caret')
			ref2.current.textContent += text2[j]
			j++
			if (j === 3) {
				setTimeout(() => typingFunction(i, j), 2000)
			} else if (j === 18) {
				setTimeout(() => typingFunction(i, j), 2000)
			} else {
				setTimeout(() => typingFunction(i, j), getRandomInt(350, 100))
			}
		} else if (j === text2.length) {
			j++
			ref2.current.classList.remove('caret')
			ref1.current.classList.add('caret')
			setTimeout(() => typingFunction(i, j), 1500)
		} else if (j === text2.length + 1) {
			j++
			ref1.current.classList.remove('caret')
			ref1.current.classList.add('active')
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (j === text2.length + 2) {
			ref1.current.textContent = ''
			ref1.current.classList.remove('active')
			ref1.current.classList.add('caret')
			j++
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (j === text2.length + 3) {
			ref1.current.classList.remove('caret')
			ref2.current.classList.add('caret')
			console.log('This is j', j)
			// console.log('setting i')
			console.log('This is text2.length + 3', text2.length + 3)
			i = 100
			j++
			console.log('This is j after increase', j)
			setTimeout(() => typingFunction(i, j), 1500)
		} else if (i === 100) {
			i++
			console.log('This is i', i)
			ref2.current.textContent = "Hi, I am Vitalie'"
			setTimeout(() => typingFunction(i, j), getRandomInt(350, 100))
		} else if (i === 101) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie'
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (i === 102) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie='
			setTimeout(() => typingFunction(i, j), 2000)
		} else if (i === 103) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie=)'
			setTimeout(() => typingFunction(i, j), 2000)
		} else if (i === 104) {
			console.log('removing caret')
			ref2.current.classList.remove('caret')
		}
	}

	return (
		<>
			<div>
				<button className="block" onClick={trigger}>
					Click
				</button>
			</div>
			<div className="flex justify-center items-center text-4xl font-bold mb-8 specialfont">
				<h1 ref={ref1} className="caret"></h1>
				<h1 ref={ref2}></h1>
			</div>
		</>
	)
}

export default TypingSequence
