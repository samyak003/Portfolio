import React, { Suspense } from "react";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Img = React.lazy(() => import("./Img"));

function Works() {
	const projects = [
		{
			title: "Coders Bake",
			img: "./images/codersbake.png",
			description: `Coders Bake is a team project where we provide news and knowledge thorugh newsletter and social media posts. The website is fully responsive, SEO optimized, has email auth, lazy loading. Technologies used in this web app are - Html, Javascript, React.Js, React Spring, React Router, TailwindCss, Netlify Functions, Firebase & Heroku. This website also
									qualifies as a PWA.`,
			link: "https://codersbake.in",
		},
		{
			title: "Blog for School of Sciences Christ University (Delhi NCR)",
			img: "./images/blog-sos.png",
			description: `Blog-SOS is a website for School of Sciences, Christ University(Delhi NCR) where all the details like events, courses, clubs,etc. of sos at one place.`,
			link: "https://blog-sos.netlify.app/",
		},
	];
	return (
		<div className="projects section" id="works">
			<h1 className="heading" data-aos="fade-up">
				Works
			</h1>
			<div className="content">
				<ul className="projectList">
					{projects.map((project, index) => (
						<li className="project" key={index} data-aos="fade-up">
							<h2 className="projectTitle">{project.title}</h2>
							<main>
								<div className="imgContainer">
									<Suspense fallback={<Loading />}>
										<Img src={project.img} alt="" />
									</Suspense>

									<div className="img-overlay">
										<p>Just a Screenshot</p>
									</div>
								</div>
								<div className="projectDetails">
									<p className="projectDescription">{project.description}</p>
									<div className="projectLinks">
										<p>
											<a href={project.link} target="blank" rel="noreferrer">
												Project Link <FontAwesomeIcon icon={faLink} />
											</a>
										</p>
										{project.link2 && (
											<p>
												<a href={project.link2} target="blank" rel="noreferrer">
													Github Repo <FontAwesomeIcon icon={faGithub} />
												</a>
											</p>
										)}
									</div>
								</div>
							</main>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Works;
