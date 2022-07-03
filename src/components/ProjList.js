import React, { forwardRef, useRef } from 'react'
import Project from './Project'
import db from '../db.json'

const ProjList = forwardRef((props, ref) => {
	//render project items
	const projects = db.map((elem) => {
		console.log(elem.techs)
		return (
			<Project
				key={elem.id}
				title={elem.title}
				desc={elem.description}
				idx={elem.id}
				techs={elem.techs}
				image={elem.image}
				demo={elem.demo}
				codeLink={elem.code}
			/>
		)
	})
	return (
		<div ref={ref}>
			<article className='aboutme'>
				<h3 className='aboutmehead'> Projects</h3>{' '}
			</article>
			<section className='projSect'>{projects}</section>
		</div>
	)
})

export default ProjList
