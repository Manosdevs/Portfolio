Stack: <ul><li>HTML</li><li>CSS</li><li>React</li><li>gsap for animations</li></ul>

Similar to any aspiring developer looking for employment, I had to make a portfolio. Issue was, I am absolutely not a designer, all the artistic talent running in our family went to my sister. Therefore, I had to spend many many hours looking at designs and other portfolios to come up with my own.  I settled for a rather simple, single static page with animations. 

Then I had to figure out how to create animations. These could have been done with some css, but I figured I'd try gsap since it was highly recommended. The basics came rather easy, their tutorials and documentation were very concise. But of course I did have to complicated it a little bit, since I wanted the project elements to alternate fade-in sides. Also, the project elements were automatically rendered into a component from a database, so there was no hard-coding the animations. So I created a function that made the animation behave differently depending on the id of the project. Took a little while to iron out the bugs with custom functions, React refs and how all those interacted with gsap and its animation triggers, but in the end all was working well.

After that I created the contact section, a very simple one with emailJS. Nothing much to say there, just a form.

The navbar was the trickiest part, since I REALLY wanted to make it a sticky sidebar. And a sticky sidebar overlapped with the animations at times, since they fade in from the side. Mostly CSS work, figured it out in the end. The real problem turned out to be the ScrollIntoView buttons. Normally this is done with a useRef hook, however the navbar was a lower level component than some of the elements. In hindsight, I could have probably moved it into another App.js level component, which would of course ruin the CSS but would have still probably been easier than what I did. So instead, I spent some time googling and learned how to use forwardRef, which took the ref of the elements I wanted to scroll to, passed them into App.js and then App.js passed them as props to the Navbar component. This allowed seamless scrolling to all elements, so I was very happy with how it turned out. 

And that's mostly about it, a lot of CSS work and Responsive Design. Then I bought a domain, learned how to set up the DNS for my hosting site and that was that. 
