import React, { useState, useEffect, forwardRef } from 'react'
import emailjs from 'emailjs-com'
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = forwardRef((props, ref) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [visClass, setVisClass] = useState('confmsg invis')

	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		gsap.from(ref.current, { autoAlpha: 0, y: 25 })
		const animation2 = gsap.to(ref.current, {
			scrollTrigger: {
				trigger: ref.current,
				start: 'top bottom',

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

	const { name, email, message } = formData

	//form change
	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	//reset fields after sending
	const handleConf = () => {
		setFormData({
			name: '',
			email: '',
			message: '',
		})
		setVisClass('confmsg invis')
	}

	//submit with emailjs
	const submit = (e) => {
		if (name && email && message) {
			const serviceId = 'service_mqhcbyd'
			const templateId = 'template_yuim9mj'
			const userId = 'yl2ZUhhvLfnRYz_rj'
			const templateParams = {
				name,
				email,
				message,
			}

			e.preventDefault()

			emailjs.send(serviceId, templateId, templateParams, userId)

			setVisClass('confmsg vis')

			setTimeout(() => {
				handleConf()
			}, 2500)
		} else {
			alert('Please fill in all fields.')
		}
	}

	return (
		<form className='formCont' ref={ref}>
			<h3 className='aboutmehead'> Contact Me! </h3>
			<input
				className='formSmall'
				label='name'
				type='text'
				name='name'
				onChange={handleChange}
				value={name}
				placeholder='Enter your name'
				required
			></input>
			<input
				className='formSmall'
				label='email'
				type='email'
				name='email'
				onChange={handleChange}
				value={email}
				placeholder='Enter your email'
				required
			></input>
			<textarea
				className='formMessage'
				type='text'
				name='message'
				onChange={handleChange}
				value={message}
				placeholder='Enter message...'
				required
			></textarea>
			<div className={visClass}> Message sent!</div>
			<button className='subBtn' onClick={submit}>
				{' '}
				Submit{' '}
			</button>
		</form>
	)
})

export default Contact
