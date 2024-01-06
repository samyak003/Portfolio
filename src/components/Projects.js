import React, { Suspense } from "react";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Img = React.lazy(() => import("./Img"));

function Projects() {
	const projects = [
		{
			title: "Dropbox Clone",
			img: "./images/dropbox_clone.png",
			description: `This cloud storage website is fully responsive and features upload and rename functionalities, drag-and-drop capabilities, and secure payment handling through Stripe. It includes a visually pleasing Dark Mode and employs Clerk.js for user authentication. Technologies utilized in this project encompass HTML, CSS, TypeScript, Next.js, React.js, Zustand for state management, Firebase, Clerk.js, Stripe, and Netlify for hosting.`,
			link: "https://dropboxclone.samyak003.in",
			link2: "https://github.com/samyak003/dropbox_clone",
		},
		{
			title: "Amazon Clone",
			img: "./images/amazon_clone.png",
			description: `
This e-commerce project features a responsive design with cart functionality, detailed product pages, delivery notifications, and secure payments through "Stripe." It includes Order History, email authentication, and a product review system. Technologies used are HTML, CSS, JavaScript, React.js, React Router, React Context API, SCSS, Firebase, Stripe, and Heroku for backend integration. The website is also a Progressive Web App (PWA), ensuring optimal user experience across devices.
`,
			link: "https://amazonclone.samyak003.in",
			link2: "https://github.com/samyak003/amazon-clone",
		},
		{
			title: "Music",
			img: "./images/music.png",
			description: `
This music streaming app project boasts full responsiveness and seamlessly integrates with Spotify through Spotify authentication and the Spotify Web API for direct song streaming. Users can easily search for their favorite songs, albums, playlists, and podcasts. The technology stack includes HTML, CSS, JavaScript, React.js, React Router, React Context API, Material UI, SCSS, and the Spotify API. This ensures a user-friendly and feature-rich experience for music enthusiasts.`,
			link: "https://music.samyak003.in",
			link2: "https://github.com/samyak003/Music",
		},
		{
			title: "Whatsapp Clone",
			img: "./images/whatsapp_clone.png",
			description: `
This text cloud messaging app project is entirely responsive and integrates Google authentication through Firebase auth. Users have the capability to create chat rooms, personalize avatars, and exchange messages within various chat rooms. Additionally, chat room creators can manage conversations by clearing the chat. The technology stack comprises HTML, CSS, JavaScript, React.js, React Context API, React Router, Material UI, and Firebase. This combination ensures a user-friendly and feature-rich platform for seamless communication.`,
			link: "https://whatsappclone.samyak003.in",
			link2: "https://github.com/samyak003/Whatsapp-Clone",
		},
		{
			title: "Instagram Clone",
			img: "./images/instagram_clone.png",
			description: `This social media website project features full responsiveness and utilizes email authentication for user access. Users can post images with captions, engage in commenting on others' posts, customize their bio and display picture, follow other users, and track their follower count. The website also includes a convenient dark mode/light mode toggle. The technology stack includes HTML, JavaScript, React.js, React Context API, React Router, Tailwind CSS, and Firebase for a seamless and secure user experience. Notably, this website qualifies as a Progressive Web App (PWA), ensuring enhanced accessibility and performance across various devices.`,
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
