import React, { forwardRef, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Header = forwardRef((props, ref) => {
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		gsap.from(ref.current, { autoAlpha: 0, y: -25 })
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
		<header className='head anim' ref={ref}>
			<div className='headAlign'>
				<h1 className='introH1'>Emmanouil Arvanitis</h1>
			</div>
			<h2 className='introH2'>
				Product Management student and Frontend Developer
			</h2>
		</header>
	)
})

export default Header
