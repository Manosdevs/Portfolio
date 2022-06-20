import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Navbar({ home, project, aboutme, contact }) {
	const testRef = useRef()

	gsap.registerPlugin(ScrollTrigger)

	const handleClick = (elem) => {
		elem.current.scrollIntoView({ behavior: 'smooth' })
	}

	useEffect(() => {
		gsap.from(testRef.current, { autoAlpha: 0, x: -25 })
		const animation2 = gsap.to(testRef.current, {
			scrollTrigger: {
				trigger: testRef.current,
				start: 'center bottom',

				toggleActions: 'play none none none',
			},
			autoAlpha: 1,
			x: 0,
			duration: 1,
		})

		return () => {
			animation2.scrollTrigger.kill()
		}
	}, [])

	return (
		<nav className='navmain ' ref={testRef}>
			<button className='navbutton' onClick={() => handleClick(home)}>
				Home
			</button>
			<button className='navbutton' onClick={() => handleClick(aboutme)}>
				About Me
			</button>
			<button className='navbutton' onClick={() => handleClick(project)}>
				Projects
			</button>
			<button className='navbutton' onClick={() => handleClick(contact)}>
				Contact{' '}
			</button>
			<div className='brandLinks'>
				<FontAwesomeIcon icon={faLinkedin}>
					<a
						rel='noreferrer'
						href='https://github.com/Manosdevs/'
						target='_blank'
					></a>
				</FontAwesomeIcon>

				<FontAwesomeIcon icon={faGithub}>
					<a
						rel='noreferrer'
						href='https://www.linkedin.com/in/emmanouil-arvanitis-656a1722a/'
						target='_blank'
					></a>
				</FontAwesomeIcon>
			</div>
		</nav>
	)
}

export default Navbar
