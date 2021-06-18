/** @format */

import "./App.css"
import { TweenMax } from "gsap"
import { useEffect, useRef } from "react"
import { Expo } from "gsap/all"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import "font-awesome/css/font-awesome.min.css"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function App() {
	let overlay_h1 = useRef(null)
	let overlay_span = useRef(null)
	let overlay = useRef(null)
	let ellipseContainer = useRef(null)
	let ellipseYellow = useRef(null)
	let circle1 = useRef(null)
	let circle2 = useRef(null)
	let logo = useRef(null)
	let menuLinks = useRef(null)
	let scrollDown = useRef(null)
	let text_title = useRef(null)
	let text_p = useRef(null)
	let watchnow = useRef(null)
	let mediaLinks = useRef(null)

	useEffect(() => {
		//menuLinks
		const firstLink = menuLinks.children[0]
		const secondLink = firstLink.nextSibling
		const thirdLink = secondLink.nextSibling

		//mediaLinks
		const firstMediaLink = mediaLinks.children[0]
		const secondMediaLink = firstMediaLink.nextSibling
		const thirdMediaLink = secondMediaLink.nextSibling

		TweenMax.to(overlay_h1, 2, {
			opacity: 0,
			y: -60,
			ease: Expo.easeInOut,
		})

		//console.log(menuLinks.children[0].nextSibling)

		TweenMax.to(overlay_span, 2, {
			delay: 0.3,
			y: -60,
			opacity: 0,
			ease: Expo.easeInOut,
		})

		TweenMax.to(overlay, 2, {
			delay: 1,
			top: "-100%",
			ease: Expo.easeInOut,
		})

		TweenMax.from(ellipseContainer, 1, {
			delay: 2,
			opacity: 0,
			ease: Expo.easeInOut,
		})

		TweenMax.from(ellipseYellow, 1, {
			delay: 2.4,
			opacity: 0,
			ease: Expo.easeInOut,
		})

		TweenMax.from(circle1, 1, {
			delay: 2.4,
			opacity: 0,
			ease: Expo.easeInOut,
		})

		TweenMax.from(circle2, 1, {
			delay: 2.6,
			opacity: 0,
			ease: Expo.easeInOut,
		})

		TweenMax.from(logo, 1, {
			delay: 3,
			opacity: 0,
			y: -100,
			ease: Expo.easeInOut,
		})

		TweenMax.staggerFrom(
			[firstLink, secondLink, thirdLink],
			1,
			{
				delay: 3.2,
				opacity: 0,
				x: -100,
				ease: Expo.easeInOut,
			},
			0.08
		)

		TweenMax.from(scrollDown, 1, {
			delay: 3.4,
			opacity: 0,
			y: 100,
			ease: Expo.easeInOut,
		})

		TweenMax.from(text_title, 1, {
			delay: 3,
			opacity: 0,
			x: 200,
			ease: Expo.easeInOut,
		})

		TweenMax.from(text_p, 1, {
			delay: 3.2,
			opacity: 0,
			x: 200,
			ease: Expo.easeInOut,
		})

		TweenMax.from(watchnow, 1, {
			delay: 3.4,
			opacity: 0,
			x: 200,
			ease: Expo.easeInOut,
		})

		TweenMax.staggerFrom(
			[firstMediaLink, secondMediaLink, thirdMediaLink],
			1,
			{
				delay: 3,
				opacity: 0,
				y: 100,
				ease: Expo.easeInOut,
			},
			0.08
		)
	}, [])

	return (
		<div className='App'>
			<div class='overlay' ref={(el) => (overlay = el)}>
				<h1 ref={(el) => (overlay_h1 = el)}>Reindeer</h1>
				<span ref={(el) => (overlay_span = el)}>snow life</span>
			</div>

			<div class='wrapper'>
				<div class='nav'>
					<div class='logo' ref={(el) => (logo = el)}>
						<h1>
							<span>
								rein <br /> deer
							</span>
							<br />
							snow life
						</h1>
					</div>

					<div class='menu-links'>
						<ul ref={(el) => (menuLinks = el)}>
							<li>home.</li>
							<li>snow life.</li>
							<li>contact.</li>
						</ul>
					</div>

					<div class='scrolldown' ref={(el) => (scrollDown = el)}>
						scroll
					</div>
				</div>

				<div class='text'>
					<div class='title' ref={(el) => (text_title = el)}>
						reindeer
					</div>
					<p ref={(el) => (text_p = el)}>
						Mauris elementum, dui ac sagittis <br /> cursus, libero elit sodales odio
					</p>
				</div>

				<div class='watchnow' ref={(el) => (watchnow = el)}>
					<FontAwesomeIcon icon={faPlay} />
					<a href='#'>watch now!</a>
				</div>

				<div class='media'>
					<ul ref={(el) => (mediaLinks = el)}>
						<li>
							<FontAwesomeIcon className='fa' icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon className='fa' icon={faTwitter} />
						</li>
						<li>
							<FontAwesomeIcon className='fa' icon={faInstagram} />
						</li>
					</ul>
				</div>

				<div class='ellipse-container' ref={(el) => (ellipseContainer = el)}>
					<div class='ellipse thin'></div>
					<div class='ellipse thick'></div>
					<div class='ellipse yellow' ref={(el) => (ellipseYellow = el)}></div>
					<div class='circle1' ref={(el) => (circle1 = el)}>
						<span>Maecenas purus at</span>
					</div>
					<div class='circle2' ref={(el) => (circle2 = el)}>
						<span>Fringilla Maecenas</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
