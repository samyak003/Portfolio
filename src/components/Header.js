import {
	faCertificate,
	faHome,
	faIdBadge,
	faPencilRuler,
	faTasks,
	faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
	const toggleSmallScr = () => {
		if (window.innerWidth <= 700) {
			toggle();
		}
	};
	const toggle = () => {
		document.querySelector(".header").classList.toggle("open");
		document.querySelector(".container").classList.toggle("change");
	};
	return (
		<section className="header">
			<ul className="header__list">
				<li className="header__listItem menubtn" onClick={() => toggle()}>
					<div className="container">
						<div className="bar1"></div>
						<div className="bar2"></div>
						<div className="bar3"></div>
					</div>
				</li>
				<li className="header__listItem" onClick={() => toggleSmallScr()}>
					<a href="#main">
						<FontAwesomeIcon icon={faHome} />
						<p>Main</p>
					</a>
				</li>
				<li className="header__listItem" onClick={() => toggleSmallScr()}>
					<a href="#aboutMe">
						<FontAwesomeIcon icon={faUserCircle} />
						<p>About Me</p>
					</a>
				</li>
				<li className="header__listItem" onClick={() => toggleSmallScr()}>
					<a href="#skills">
						<FontAwesomeIcon icon={faPencilRuler} />
						<p>Skills</p>
					</a>
				</li>
				<li className="header__listItem" onClick={() => toggleSmallScr()}>
					<a href="#projects">
						<FontAwesomeIcon icon={faTasks} />
						<p>Projects</p>
					</a>
				</li>
				<li className="header__listItem" onClick={() => toggleSmallScr()}>
					<a href="#certificates">
						<FontAwesomeIcon icon={faCertificate} />
						<p>Certificates</p>
					</a>
				</li>
				<li className="header__listItem" onClick={() => toggleSmallScr()}>
					<a href="#contactMe">
						<FontAwesomeIcon icon={faIdBadge} />
						<p>Contact Me</p>
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Header;
