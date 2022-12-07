import React, { Suspense } from "react";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Img = React.lazy(() => import("./Img"));

function Projects() {
	const projects = [
		{
			title: "Amazon Clone",
			img: "./images/amazon_clone.png",
			description: `This project is based on e-commerce websites. It is fully
									responsive design, has cart functionality, product pages,
									delivery notifications, Payment handler using “Stripe”, Order
									History, Email auth., lazy loading, product review system.
									Technologies used in this website are - Html, Css, Javascript,
									React.Js, React Router, React Context Api, Scss, Firebase,
									Stripe, Heroku(backend for stripe). This website also
									qualifies as a PWA.`,
			link: "https://amazonclone.samyak003.in",
			link2: "https://github.com/samyak003/amazon-clone",
		},
		{
			title: "Music",
			img: "./images/music.png",
			description: `This project is based on a music streaming app. It is fully
									responsive, uses spotify auth., spotify web api to stream
									songs directly from spotify. A user can search for their fav.
									songs, albums, playlists and podcasts. Technologies used in
									this website are - Html, Css, Javascript, React.Js, React
									Router, React Context Api, Material Ui, Scss, Spotify Api.`,
			link: "https://music.samyak003.in",
			link2: "https://github.com/samyak003/Music",
		},
		{
			title: "Whatsapp Clone",
			img: "./images/whatsapp_clone.png",
			description: `This project is based on a text cloud messenging app. It is
									fully responsive, uses google auth (using firebase auth).
									Users can create chat rooms, have their custom avatars, send
									messages in different chat room, chat room's creator can clear
									the chat too. Technologies used in this website are - Html,
									Css, Javascript, React.Js, React Context Api, React Router,
									Material Ui, Firebase.`,
			link: "https://whatsappclone.samyak003.in",
			link2: "https://github.com/samyak003/Whatsapp-Clone",
		},
		{
			title: "Instagram Clone",
			img: "./images/instagram_clone.png",
			description: `This project is based on a social media website. It is fully
									responsive, users email auth. Users can post images with
									caption, comment on other's post, change their bio and display
									picture, can follow any user, have a count of follow and
									followers, dark mode/light mode toggle. Technologies used in
									this website are - Html, Javascript, React.Js, React Context
									Api, React Router, TailwindCss, Firebase. This website also
									qualifies as a PWA.`,
			link: "https://instagramclone.samyak003.in",
			link2: "https://github.com/samyak003/Instagram-Clone",
		},
	];
	return (
		<div className="projects section" id="projects">
			<h1 className="heading" data-aos="fade-up">
				Projects
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

export default Projects;
