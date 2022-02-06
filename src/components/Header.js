import {
	faCertificate,
	faHome,
	faIdBadge,
	faMoon,
	faPencilRuler,
	faTasks,
	faUserCircle,
	faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function Header() {
	const [darkTheme, setDarkTheme] = useState(
		localStorage.theme === "dark" ? true : false,
	);

	const links = [
		{ href: "#main", title: "Main", icon: faHome },
		{ href: "#aboutMe", title: "About Me", icon: faUserCircle },
		{ href: "#skills", title: "Skills", icon: faPencilRuler },
		{ href: "#projects", title: "Projects", icon: faTasks },
		{ href: "#certificates", title: "Certificates", icon: faCertificate },
		{ href: "#contactMe", title: "Contact Me", icon: faIdBadge },
	];
	const toggleSmallScr = () => {
		if (window.innerWidth <= 700) {
			toggle();
		}
	};
	useEffect(() => {
		localStorage.theme = darkTheme ? "dark" : "light";
		const root = document.documentElement;
		root?.style.setProperty(
			"--shadow2",
			darkTheme
				? `inset -12px -12px 12px 0 rgba(58, 58, 58, 0.3),
		-12px -12px 12px 0 rgba(0, 0, 0, 0.2)`
				: `inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff`,
		);
		root?.style.setProperty("--bg-color", darkTheme ? "#262626" : "#e6e7ee");
		root?.style.setProperty("--text-color", darkTheme ? "#fcfcfc" : "#31344b");
		root?.style.setProperty(
			"--shadow1",
			darkTheme
				? `-12px -12px 12px 0 rgba(58, 58, 58, 0.3),
		12px 12px 12px 0 rgba(0, 0, 0, 0.2)`
				: `6px 6px 12px #b8b9be, -6px -6px 12px #fff`,
		);
	}, [darkTheme]);

	useEffect(() => {
		if (localStorage.theme === "dark" || !("theme" in localStorage)) {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);
	const toggle = () => {
		document.querySelector(".header").classList.toggle("open");
		document.querySelector(".container").classList.toggle("change");
	};
	return (
		<section className="header" data-aos="fade-up">
			<ul className="header__list">
				<li className="header__listItem menubtn" onClick={() => toggle()}>
					<div className="container">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				</li>
				{links.map((link, index) => (
					<li className="header__listItem" onClick={() => toggleSmallScr()}>
						<a href={link.href}>
							<FontAwesomeIcon icon={link.icon} />
							<p>{link.title}</p>
						</a>
					</li>
				))}
				<li
					className="header__listItem"
					onClick={() => {
						toggleSmallScr();
					}}
				>
					<a onClick={() => setDarkTheme(!darkTheme)}>
						<FontAwesomeIcon icon={!darkTheme ? faMoon : faSun} />
						<p>{!darkTheme ? "Dark" : "Light"} Mode</p>
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Header;
