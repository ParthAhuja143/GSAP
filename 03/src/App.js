/** @format */
import React, { useEffect, useRef } from "react"
import logo from "./logo.svg"
import "./App.scss"
import CSSRullPlugin from "gsap/CSSRulePlugin"
import { gsap } from "gsap"
import { TimelineLite } from "gsap/all"
import { Power3 } from "gsap/gsap-core"
import { Power0 } from "gsap/gsap-core"

function App() {
	let container = useRef(null)
	let image = useRef(null)
	const imageReveal = CSSRullPlugin.getRule(".img-container:after")

	const tl = new TimelineLite()

	useEffect(() => {
		//console.log(imageReveal)
		tl.to(container, 1, { css: { visibility: "visible" } })
			.to(imageReveal, 1.4, { width: "0%", ease: Power3.easeOut })
			.from(image, 1.4, { scale: 1.6, ease: Power0.easeIn, delay: -1.4 })
	}, [])

	return (
		<section className='main'>
			<div ref={(el) => (container = el)} className='container'>
				<>
					<div className='img-container'>
						<img
							ref={(el) => (image = el)}
							src='https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
						/>
					</div>
				</>
			</div>
		</section>
	)
}

export default App
