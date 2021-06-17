import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import {} from "gsap";
import "./App.css";
import { TweenMax } from "gsap/all";
import { Power3 } from "gsap/gsap-core";

function App() {
	let logoimg = useRef(null);

	useEffect(() => {
		TweenMax.to(logoimg, 1, {
			opacity: 1,
			y: -100,
			ease: Power3.easeIn,
		});
	}, [logoimg]);

	return (
		<div className='App'>
			<header className='App-header'>
				<img ref={(el) => (logoimg = el)} src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
