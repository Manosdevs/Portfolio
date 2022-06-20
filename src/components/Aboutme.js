import pepega from '../images/pepega.jpeg'
import React, { useEffect, useRef, forwardRef } from 'react'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Aboutme = forwardRef((props, ref) => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		gsap.from(ref.current, { autoAlpha: 0, y: 25 })
		const animation2 = gsap.to(ref.current, {
			scrollTrigger: {
				trigger: ref.current,
				start: 'center bottom',

				toggleActions: 'play none none none',
			},
			autoAlpha: 1,
			y: 0,
			duration: 1,
		})

		return () => {
			animation2.scrollTrigger.kill()
		}
	}, [])
	return (
		<article className='aboutme' ref={ref}>
			<h3 className='aboutmehead'> About me</h3>{' '}
			<div>
				<p className='aboutmepar'>
					I'm a (senior) Product Management student that stumbled across web
					development, and decided to pursue it. A few of the technologies I've
					recently used are:{' '}
				</p>
				<div className='techDiv'>
					<ul>
						<li>&gt; &nbsp;HTML</li>
						<li>&gt; &nbsp;CSS</li>
						<li>&gt; &nbsp;Javascript</li>
					</ul>
					<ul>
						<li>&gt; &nbsp;ReactJS</li>
						<li>&gt; &nbsp;MongoDB</li>
						<li>&gt; &nbsp;NodeJS / Express</li>
					</ul>
				</div>
			</div>
		</article>
	)
})

export default Aboutme
