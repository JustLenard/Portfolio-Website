'use client'

import { getRandomInt } from '@/lib/utils'
import { useRef } from 'react'

const TypingSequence = () => {
	const ref1 = useRef<HTMLHeadingElement | null>(null)
	const ref2 = useRef<HTMLHeadingElement | null>(null)

	const text = "console.log('"
	const text2 = "Hi, I am Vitalie')"

	const length1 = text.length
	const length2 = text2.length

	/**
	 * Cursed. Please don't judge
	 **/
	const typingFunction = (i: number, j: number) => {
		if (!ref1.current || !ref2.current) return

		if (i < length1) {
			ref1.current.textContent += text[i]
			i++
			setTimeout(() => typingFunction(i, j), getRandomInt(250, 100))
		} else if (j < length2) {
			ref1.current.classList.remove('caret')
			ref2.current.classList.add('caret')
			ref2.current.textContent += text2[j]
			j++
			if (j === 3) {
				setTimeout(() => typingFunction(i, j), 2000)
			} else if (j === 18) {
				setTimeout(() => typingFunction(i, j), 2000)
			} else {
				setTimeout(() => typingFunction(i, j), getRandomInt(250, 100))
			}
		} else if (j === length2) {
			j++
			ref2.current.classList.remove('caret')
			ref1.current.classList.add('caret')
			setTimeout(() => typingFunction(i, j), 1500)
		} else if (j === length2 + 1) {
			j++
			ref1.current.classList.remove('caret')
			ref1.current.classList.add('active')
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (j === length2 + 2) {
			ref1.current.textContent = ''
			ref1.current.classList.remove('active')
			ref1.current.classList.add('caret')
			j++
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (j === length2 + 3) {
			ref1.current.classList.remove('caret')
			ref2.current.classList.add('caret')
			i = 100
			j++
			setTimeout(() => typingFunction(i, j), 1500)
		} else if (i === 100) {
			i++
			ref2.current.textContent = "Hi, I am Vitalie'"
			setTimeout(() => typingFunction(i, j), getRandomInt(250, 100))
		} else if (i === 101) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie'
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (i === 102) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie '
			setTimeout(() => typingFunction(i, j), 1000)
		} else if (i === 103) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie ='
			setTimeout(() => typingFunction(i, j), 2000)
		} else if (i === 104) {
			i++
			ref2.current.textContent = 'Hi, I am Vitalie =)'
			setTimeout(() => typingFunction(i, j), 2000)
		} else if (i === 105) {
			ref2.current.classList.remove('caret')
		}
	}

	setTimeout(() => typingFunction(0, 0), 2000)

	return (
		<div className="flex justify-start items-center text-4xl font-bold mb-8 specialfont">
			<h1 ref={ref1} className="caret"></h1>
			<h1 ref={ref2}></h1>
		</div>
	)
}

export default TypingSequence
