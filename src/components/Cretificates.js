import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Cretificates() {
	return (
		<div className="certificates section" id="certificates">
			<h1 className="heading">Certificates</h1>
			<main>
				<div className="card">
					<div className="imgContainer">
						<LazyLoadImage src="./images/iit.webp" alt="" />
						<div className="img-overlay">
							<p>A piece of paper</p>
						</div>
					</div>
					<div className="card-details">
						<p>
							<span>Title - </span>1st Position in I-Hack Junior
						</p>
						<p>
							<span>Year - </span>2021
						</p>
						<p>
							<span>From - </span>IIT Bombay, Codingal
						</p>
					</div>
				</div>
				<div className="card">
					<div className="imgContainer">
						<LazyLoadImage src="./images/freecodecamp.webp" alt="" />
						<div className="img-overlay">
							<p>A piece of paper</p>
						</div>
					</div>
					<div className="card-details">
						<p>
							<span>Title - </span>Responsive Web Design
						</p>
						<p>
							<span>Year - </span>2021
						</p>
						<p>
							<span>From - </span>Freecodecamp
						</p>
					</div>
				</div>
				<div className="card">
					<div className="imgContainer">
						<LazyLoadImage src="./images/udemy.webp" alt="" />
						<div className="img-overlay">
							<p>A piece of paper</p>
						</div>
					</div>
					<div className="card-details">
						<p>
							<span>Title - </span>HTML & CSS Tutorial and Projects Course
						</p>
						<p>
							<span>Year - </span> 2020
						</p>
						<p>
							<span>From - </span> Udemy
						</p>
					</div>
				</div>
				<div className="card">
					<div className="imgContainer">
						<LazyLoadImage src="./images/aparoksha.jpg" alt="" />
						<div className="img-overlay">
							<p>A piece of paper</p>
						</div>
					</div>
					<div className="card-details">
						<p>
							<span>Title - </span>Error 404 (Aparoksha)
						</p>
						<p>
							<span>Year - </span>2021
						</p>
						<p>
							<span>From - </span>Christ University
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}

export default Cretificates;
