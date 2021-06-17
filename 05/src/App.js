/** @format */
import "./App.scss"
import arrow from "./assets/arrow-right.svg"
import imgGirl from "./assets/girl.webp"
import imgBoy from "./assets/boy.webp"
import { useEffect, useRef } from "react"

import { gsap, TweenMax, TimelineLite, Power3 } from "gsap"

function App() {
	let app = useRef(null)
	let images = useRef(null)
	let content = useRef(null)

	let tl = new TimelineLite({ delay: 0.5 })

	useEffect(() => {
		// Image vars
		const girlImage = images.firstElementChild
		const boyImage = images.lastElementChild

		// Content vars
		const headlineFirst = content.children[0].children[0] // h1 -> .hero-content-line
		const headlineSecond = headlineFirst.nextSibling //content.children[1].children[0]  h1 -> .hero-content-line
		const headlineThird = headlineSecond.nextSibling
		const contentP = content.children[1]
		const contentButton = content.children[2]

		TweenMax.to(app, 0, { css: { visibility: "visible" } })

		tl.from(girlImage, 1.2, { y: 1200, ease: Power3.easeOut }, "Start")
			.from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
			.from(boyImage, 1.2, { y: 1200, ease: Power3.easeOut }, 0.2)
			.from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)

		tl.staggerFrom(
			[headlineFirst.children, headlineSecond.children, headlineThird.children],
			1,
			{
				y: 44,
				ease: Power3.easeOut,
				delay: 0.4,
			},
			0.15,
			"Start"
		)
			.from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
			.from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6)
	}, [tl])
	return (
		<div className='hero' ref={(el) => (app = el)}>
			<div className='container'>
				<div className='hero-inner'>
					<div className='hero-content'>
						<div className='hero-content-inner' ref={(el) => (content = el)}>
							<h1>
								<div className='hero-content-line'>
									<div className='hero-content-line-inner'>Relieving the burden</div>
								</div>
								<div className='hero-content-line'>
									<div className='hero-content-line-inner'>of disease caused</div>
								</div>
								<div className='hero-content-line'>
									<div className='hero-content-line-inner'>by behavior</div>
								</div>
							</h1>
							<p>Better treats serious cardiometabolic diseases to transform lives and reduce healthcare utilisation through the use of digital therapeutics</p>
							<div className='btn-row'>
								<button className='explore-button'>
									explore
									<div className='arrow-icon'>
										<img src={arrow} alt='arrow' />
									</div>
								</button>
							</div>
						</div>
					</div>
					<div className='hero-images'>
						<div className='hero-images-inner' ref={(el) => (images = el)}>
							<div className='hero-image girl'>
								<img src={imgGirl} alt='girl' />
							</div>
							<div className='hero-image boy'>
								<img src={imgBoy} alt='boy' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
