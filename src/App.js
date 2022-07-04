import React, { useRef } from 'react'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Header from './components/Header'
import ProjList from './components/ProjList'
import Contact from './components/Contact'
import Aboutme from './components/Aboutme'

function App() {
	gsap.registerPlugin(ScrollTrigger)
	const homeRef = useRef()
	const aboutmeRef = useRef()
	const projRef = useRef()
	const contactsRef = useRef()

	return (
		<main className='app'>
			<aside className='sidebar'>
				{' '}
				<Navbar
					home={homeRef}
					contact={contactsRef}
					project={projRef}
					aboutme={aboutmeRef}
				/>
			</aside>
			<div className='maincont'>
				<Header ref={homeRef} />

				<ProjList ref={projRef} />
				<Aboutme ref={aboutmeRef} />

				<Contact ref={contactsRef} />
			</div>
		</main>
	)
}

export default App
