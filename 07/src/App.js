/** @format */

import forest from "./assets/forest.png"
import { useEffect, useRef } from "react"
import "./App.css"
import { Expo, TimelineMax } from "gsap"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "font-awesome/css/font-awesome.min.css"
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { Power3 } from "gsap/gsap-core"
function App() {
	let timeline1 = new TimelineMax()
	let title = useRef(null)
	let nav = useRef(null)
	let subTitle = useRef(null)
	let bottomNav = useRef(null)
	let grid = useRef(null)
	let forestImage = useRef(null)
	let bgImage = useRef(null)
	let image1 = useRef(null)
	let image2 = useRef(null)
	let image3 = useRef(null)
	let image4 = useRef(null)
	let destination = useRef(null)

	useEffect(() => {
		timeline1
			.from(title, 1.5, {
				y: 250,
				ease: Power3.easeInOut,
			})
			.from(
				nav,
				1,
				{
					y: 30,
					autoAlpha: 0,
					ease: Power3.easeInOut,
				},
				"-=1"
			)
			.from(subTitle, 1, {
				y: 30,
				autoAlpha: 0,
				ease: Power3.easeInOut,
			})
			.from(
				bottomNav,
				2,
				{
					width: "0%",
					autoAlpha: 0,
					ease: Power3.easeInOut,
				},
				"-=2"
			)
	}, [])

	let timeline2 = new TimelineMax()

	const handleClick = (event) => {
		timeline2
			.set(grid, {
				display: "grid",
			})
			.to(forestImage, 3, {
				y: -500,
				scale: 1.1,
				ease: Expo.easeInOut,
			})
			.to(
				bgImage,
				3,
				{
					y: -600,
					ease: Expo.easeInOut,
				},
				"-=3"
			)
			.to(
				subTitle,
				3,
				{
					autoAlpha: 0,
					Y: -100,
					ease: Expo.easeInOut,
				},
				"-=3"
			)
			.to(
				bottomNav,
				3,
				{
					width: 0,
					ease: Expo.easeInOut,
				},
				"-=3"
			)
			.to(
				nav,
				3,
				{
					color: "white",
				},
				"-=3"
			)
			.to(
				image1,
				2,
				{
					height: "100%",
					ease: Expo.easeInOut,
				},
				"-=1"
			)
			.to(
				image2,
				2,
				{
					height: "100%",
					ease: Expo.easeInOut,
				},
				"-=1.8"
			)
			.to(
				image3,
				2,
				{
					height: "100%",
					ease: Expo.easeInOut,
				},
				"-=1.5"
			)
			.to(
				image4,
				2,
				{
					height: "100%",
					ease: Expo.easeInOut,
				},
				"-=1.8"
			)
			.to(
				destination,
				2,
				{
					autoAlpha: 1,
					y: -20,
					ease: Expo.easeOut,
				},
				"-=1.6"
			)
	}

	const handleReverse = (e) => {
		timeline2.reverse()
	}

	return (
		<section>
			<nav ref={(el) => (nav = el)}>
				<div className='left'>
					<ul>
						<li id='home'>
							<FontAwesomeIcon icon={faHome} onClick={(e) => handleReverse(e)} />
						</li>
					</ul>
				</div>
				<div className='middle'>
					<h4>
						WEBSITE <br />
						DESIGN <br /> COMPANY
					</h4>
				</div>
				<div className='right'>
					<ul>
						<li>
							<FontAwesomeIcon icon={faTwitter} />
						</li>
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon icon={faInstagram} />
						</li>
					</ul>
				</div>
			</nav>
			<div className='container'>
				<div className='title' ref={(el) => (title = el)}>
					<h1>
						<span className='black'>DESTINATION</span>
						<span className='outlined'>UNKNOWN</span>
					</h1>
				</div>
				<div className='forest'>
					<img src={forest} alt='forest' ref={(el) => (forestImage = el)} />
				</div>
				<div className='desc'>
					<p className='sub-title' ref={(el) => (subTitle = el)}>
						We challenge our friends around the globe to show us their destination unknowns. Share yours for a chance of winning your dream destination unknown trips.
					</p>
					<div ref={(el) => (bottomNav = el)} id='bottom-nav' className='bottom-nav' onClick={(e) => handleClick(e)}>
						<h4>EXPLORE DESTINATION</h4>
						<div className='circle'></div>
					</div>
				</div>
				<div className='grid' ref={(el) => (grid = el)}>
					<h1 className='destination' ref={(el) => (destination = el)}>
						OESCHINEN LAKE <br />
						<span className='outlined white_outline'>SWITZERLAND</span>
					</h1>
					<div className='imgs' ref={(el) => (image1 = el)}>
						<div className='img-wrapper first-img'></div>
					</div>
					<div className='imgs-2' ref={(el) => (image2 = el)}>
						<div className='img-wrapper second-img'></div>
					</div>
					<div className='imgs-3' ref={(el) => (image3 = el)}>
						<div className='img-wrapper third-img'></div>
					</div>
					<div className='imgs-4' ref={(el) => (image4 = el)}>
						<div className='img-wrapper forth-img'></div>
					</div>
				</div>
				<div className='bg-image' ref={(el) => (bgImage = el)}></div>
			</div>
		</section>
	)
}

export default App
