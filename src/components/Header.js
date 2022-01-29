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
				{links.map((link, index) => (
					<li className="header__listItem" onClick={() => toggleSmallScr()}>
						<a href={link.href}>
							<FontAwesomeIcon icon={link.icon} />
							<p>{link.title}</p>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Header;
