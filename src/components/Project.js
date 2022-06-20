import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import pepega from '../images/pepega.jpeg'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Project({ title, desc, idx, techs, image, demo, codeLink }) {
	gsap.registerPlugin(ScrollTrigger)

	let elClass = `proj leftSide trigger${idx}`
	let animClass = '30vw'

	if (idx % 2 !== 0) {
		elClass = `proj rightSide trigger${idx}`
		animClass = '-30vw'
		console.log(idx % 2)
	}

	const techItems = techs.map((elem) => {
		return <li>{elem}</li>
	})

	useEffect(() => {
		const animation2 = gsap.to(`.trigger${idx}`, {
			scrollTrigger: {
				trigger: `.trigger${idx}`,
				start: 'center bottom',

				toggleActions: 'play none none none',
			},
			opacity: 1,
			x: animClass,

			ease: 'power4.out',
			duration: 1,
		})

		return () => {
			animation2.scrollTrigger.kill()
		}
	}, [])
	return (
		<article className={elClass}>
			<div className='projDesc'>
				<h3 className='projTitle'>{title}</h3>
				{desc}
				<div className='linkBtnDiv'>
					<button className='linkBtn'>
						<a rel='noreferrer' href={demo} target='_blank'>
							{' '}
							Demo
						</a>
					</button>
					<button className='linkBtn'>
						<a rel='noreferrer' href={codeLink} target='_blank'>
							&lt;/&gt; Code
						</a>
					</button>
				</div>
			</div>
			<div className='projTech'>
				<img src={pepega} alt='appimg'></img>
				<ul className='projUl'>{techItems}</ul>
			</div>
		</article>
	)
}

export default Project
