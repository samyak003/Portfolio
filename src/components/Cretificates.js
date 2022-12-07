import React, { Suspense } from "react";
import Loading from "./Loading";
const Img = React.lazy(() => import("./Img"));

function Cretificates() {
	const certificates = [
		{
			title: "Workshop Attendee",
			year: "2022",
			from: "Binghamton University",
			img: "./images/Binghamton.webp",
		},
		{
			title: "Internship Completion Certificate",
			year: "2022",
			from: "Google, Smartinternz",
			img: "./images/smartinternz_android.png",
		},
		{
			title: "The Fundamentals of Digital Marketing",
			year: "2022",
			from: "Google",
			img: "./images/digital marketing.webp",
		},
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
			img: "./images/udemy.webp",
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
			<h1 className="heading" data-aos="fade-up">
				Certificates
			</h1>
			<main>
				{certificates.map((certificate, index) => (
					<div className="card" key={index} data-aos="fade-up">
						<div className="imgContainer">
							<Suspense fallback={<Loading />}>
								<Img src={certificate.img} alt="" />
							</Suspense>
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
