import React, { useState, useEffect, forwardRef } from 'react'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Aboutme = forwardRef((props, ref) => {
	const [hidePar, setHidePar] = useState(false)
	//animation
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
		// eslint-disable-next-line
	}, [])
	return (
		<article className='aboutme' ref={ref}>
			<h3 className='aboutmehead'> About me</h3>{' '}
			<div className='aboutmeDiv'>
				<p className='aboutmepar'>
					I'm a Product Management student that likes to code.
					<button
						onClick={() => setHidePar(true)}
						className={!hidePar ? 'readMore' : ' hide'}
					>
						Read more.
					</button>
					<br></br>
				</p>

				<p className={hidePar ? 'aboutmepar' : 'hide'}>
					In early 2022, I was accepted into my University's internship program.
					Sadly, I was not eligible to participate in one, due to being involved
					with our family business. Suddenly, I found myself with more time on
					my hands, as I was almost done with the University curriculum.{' '}
					<br></br>
					<br></br>After being encouraged by some friends who are already in the
					industry, and following the interest I already had, I started learning
					how to code. Soon enough, I knew that this was what I wanted to do for
					my career. <br></br>
					<br></br>I already had some knowledge about the subject, thanks to my
					High School Computer Science professors who were excellent, and the
					classes about algorithms and Computer Science in my University
					curriculum. Between that knowledge, the very long hours I put in and
					the occasional help from my friends, I learned rather fast. I am now
					seeking an internship role where I can work alongside and learn from
					other developers.{' '}
					<button
						onClick={() => setHidePar(false)}
						className={hidePar ? 'readMore' : 'hide'}
					>
						Hide
					</button>
					<br></br>
				</p>

				<div className='techDiv'>
					Below is a list of the technologies I've used and I'm comfortable
					with. I'm always open to learning new frameworks or languages.
					<div className='techLists'>
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
			</div>
		</article>
	)
})

export default Aboutme
