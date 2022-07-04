import React, { forwardRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
		// eslint-disable-next-line
	}, [])
	return (
		<header className='head anim' ref={ref}>
			<div className='headAlign'>
				<h1 className='introH1'>Emmanouil Arvanitis</h1>
			</div>
			<h2 className='introH2'>
				Frontend Developer and Product Management student
			</h2>
			<div className='brandLinksHead'>
				<a
					rel='noreferrer'
					href='mailto:emmanouil.arva@gmail.com'
					target='_blank'
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
				<a
					rel='noreferrer'
					href='https://www.linkedin.com/in/emmanouil-arvanitis-656a1722a/'
					target='_blank'
				>
					<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
				</a>
				<a
					rel='noreferrer'
					href='https://github.com/Manosdevs/'
					target='_blank'
				>
					<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
				</a>
			</div>
		</header>
	)
})

export default Header
