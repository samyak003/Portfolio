import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Main() {
	return (
		<div className="main section" id="main">
			<main>
				<h1 className="main__heading">
					Hi, I am <br />
					Samyak Jain
					<br />
					<span>Welcome To My Porfolio</span>
					<br />
					<span>I like building Web Apps.</span>
				</h1>
			</main>
			<section>
				<a href="#aboutMe" className="btn">
					Explore <FontAwesomeIcon icon={faArrowDown} />
				</a>
			</section>
		</div>
	);
}

export default Main;
