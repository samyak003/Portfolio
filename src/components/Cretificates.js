import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Cretificates() {
	const certificates = [
		{
			title: "1st Position in I-Hack Junior",
			year: "2021",
			from: "IIT Bombay, Codingal",
			img: "./images/iit.webp",
		},
		{
			title: "Responsive Web Design",
			year: "2021",
			from: "Freecodecamp",
			img: "./images/freecodecamp.webp",
		},
		{
			title: "HTML & CSS Tutorial and Projects Course",
			year: "2020",
			from: "Udemy",
			img: "./images/freecodecamp.webp",
		},
		{
			title: "Error 404 (Aparoksha)",
			year: "2021",
			from: "Christ University",
			img: "./images/aparoksha.jpg",
		},
	];
	return (
		<div className="certificates section" id="certificates">
			<h1 className="heading">Certificates</h1>
			<main>
				{certificates.map((certificate, index) => (
					<div className="card" key={index}>
						<div className="imgContainer">
							<LazyLoadImage src={certificate.img} alt="" />
							<div className="img-overlay">
								<p>A piece of paper</p>
							</div>
						</div>
						<div className="card-details">
							<p>
								<span>Title - </span>
								{certificate.title}
							</p>
							<p>
								<span>Year - </span>
								{certificate.year}
							</p>
							<p>
								<span>From - </span>
								{certificate.from}
							</p>
						</div>
					</div>
				))}
			</main>
		</div>
	);
}

export default Cretificates;
