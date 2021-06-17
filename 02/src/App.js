/** @format */

import logo from "./logo.svg"
import "./App.css"
import React, { useEffect, useRef, useState } from "react"
import { TweenMax, gsap } from "gsap"
import { Power3 } from "gsap/gsap-core"

function App() {
	let app = useRef(null)
	let circleYellow = useRef(null)
	let circleRed = useRef(null)
	let circleBlue = useRef(null)

	const [expandYellow, setExpandYellow] = useState(true)
	const [expandBlue, setExpandBlue] = useState(true)
	const [expandRed, setExpandRed] = useState(true)

	const handleClickRed = () => {
		let bool = expandRed
		if (expandRed) {
			TweenMax.to(circleRed, 1, { width: 200, height: 200, ease: Power3.easeInOut })
		} else {
			TweenMax.to(circleRed, 1, { width: 75, height: 75, ease: Power3.easeInOut })
		}

		setExpandRed(!bool)
	}

	const handleClickBlue = () => {
		let bool = expandBlue
		if (expandBlue) {
			TweenMax.to(circleBlue, 1, { width: 200, height: 200, ease: Power3.easeInOut })
		} else {
			TweenMax.to(circleBlue, 1, { width: 75, height: 75, ease: Power3.easeInOut })
		}

		setExpandBlue(!bool)
	}

	const handleClickYellow = () => {
		let bool = expandYellow
		if (expandYellow) {
			TweenMax.to(circleYellow, 1, { width: 200, height: 200, ease: Power3.easeInOut })
		} else {
			TweenMax.to(circleYellow, 1, { width: 75, height: 75, ease: Power3.easeInOut })
		}

		setExpandYellow(!bool)
	}

	useEffect(() => {
		TweenMax.to(app, 1, { css: { visibility: "visible" } })
		TweenMax.from(circleYellow, 1, { opacity: 0, x: 40, ease: Power3.easeOut })
		TweenMax.from(circleRed, 1, { delay: 0.2, opacity: 0, x: 40, ease: Power3.easeOut })
		TweenMax.from(circleBlue, 1, { delay: 0.4, opacity: 0, x: 40, ease: Power3.easeOut })
	}, [])
	return (
		<div ref={(el) => (app = el)} className='App'>
			<header className='App-header'>
				<div className='circle-container'>
					<div ref={(el) => (circleYellow = el)} onClick={(event) => handleClickYellow()} className='circle'></div>
					<div ref={(el) => (circleRed = el)} onClick={(event) => handleClickRed()} className='circle-red'></div>
					<div ref={(el) => (circleBlue = el)} onClick={(event) => handleClickBlue()} className='circle-blue'></div>
				</div>
			</header>
		</div>
	)
}

export default App
