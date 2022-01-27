import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Projects() {
	return (
		<div className="projects section" id="projects">
			<h1 className="heading">Projects</h1>
			<div className="content">
				<ul className="projectList">
					<li className="project">
						<h2 className="projectTitle">Amazon Clone</h2>
						<main>
							<div className="imgContainer">
								<LazyLoadImage src="./images/amazon_clone.png" alt="" />
								<div className="img-overlay">
									<p>Just a Screenshot</p>
								</div>
							</div>
							<div className="projectDetails">
								<p className="projectDescription">
									This project is based on e-commerce websites. It is fully
									responsive design, has cart functionality, product pages,
									delivery notifications, Payment handler using “Stripe”, Order
									History, Email auth., lazy loading, product review system.
									Technologies used in this website are – Html, Css, Javascript,
									React.Js, React Router, React Context Api, Scss, Firebase,
									Stripe, Heroku(backend for stripe). This website also
									qualifies as a PWA.
								</p>
								<div className="projectLinks">
									<p>
										<a
											href="https://amazonclone.samyak003.in"
											target="_blank"
											rel="noreferrer"
										>
											Project Link
										</a>
									</p>
									<p>
										<a
											href="https://github.com/samyak003/amazon-clone"
											target="_blank"
											rel="noreferrer"
										>
											Github Repo
										</a>
									</p>
								</div>
							</div>
						</main>
					</li>
					<li className="project">
						<h2 className="projectTitle">Music</h2>
						<main>
							<div className="imgContainer">
								<LazyLoadImage src="./images/music.png" alt="" />
								<div className="img-overlay">
									<p>Just a Screenshot</p>
								</div>
							</div>
							<div className="projectDetails">
								<p className="projectDescription">
									This project is based on a music streaming app. It is fully
									responsive, uses spotify auth., spotify web api to stream
									songs directly from spotify. A user can search for their fav.
									songs, albums, playlists and podcasts. Technologies used in
									this website are – Html, Css, Javascript, React.Js, React
									Router, React Context Api, Material Ui, Scss, Spotify Api.
								</p>
								<div className="projectLinks">
									<p>
										<a
											href="https://music.samyak003.in"
											target="_blank"
											rel="noreferrer"
										>
											Project Link
										</a>
									</p>
									<p>
										<a
											href="https://github.com/samyak003/Music"
											target="_blank"
											rel="noreferrer"
										>
											Github Repo
										</a>
									</p>
								</div>
							</div>
						</main>
					</li>
					<li className="project">
						<h2 className="projectTitle">Whatsapp Clone</h2>
						<main>
							<div className="imgContainer">
								<LazyLoadImage src="./images/whatsapp_clone.png" alt="" />
								<div className="img-overlay">
									<p>Just a Screenshot</p>
								</div>
							</div>
							<div className="projectDetails">
								<p className="projectDescription">
									This project is based on a text cloud messenging app. It is
									fully responsive, uses google auth (using firebase auth).
									Users can create chat rooms, have their custom avatars, send
									messages in different chat room, chat room’s creator can clear
									the chat too. Technologies used in this website are – Html,
									Css, Javascript, React.Js, React Context Api, React Router,
									Material Ui, Firebase.
								</p>
								<div className="projectLinks">
									<p>
										<a
											href="https://whatsappclone.samyak003.in"
											target="_blank"
											rel="noreferrer"
										>
											Project Link
										</a>
									</p>
									<p>
										<a
											href="https://github.com/samyak003/Whatsapp-Clone"
											target="_blank"
											rel="noreferrer"
										>
											Github Repo
										</a>
									</p>
								</div>
							</div>
						</main>
					</li>
					<li className="project">
						<h2 className="projectTitle">Instagram Clone</h2>
						<main>
							<div className="imgContainer">
								<LazyLoadImage src="./images/instagram_clone.png" alt="" />
								<div className="img-overlay">
									<p>Just a Screenshot</p>
								</div>
							</div>
							<div className="projectDetails">
								<p className="projectDescription">
									This project is based on a social media website. It is fully
									responsive, users email auth. Users can post images with
									caption, comment on other’s post, change their bio and display
									picture, can follow any user, have a count of follow and
									followers, dark mode/light mode toggle. Technologies used in
									this website are – Html, Javascript, React.Js, React Context
									Api, React Router, TailwindCss, Firebase. This website also
									qualifies as a PWA.
								</p>
								<div className="projectLinks">
									<p>
										<a
											href="https://instagramclone.samyak003.in"
											target="_blank"
											rel="noreferrer"
										>
											Project Link
										</a>
									</p>
									<p>
										<a
											href="https://github.com/samyak003/Instagram-Clone"
											target="_blank"
											rel="noreferrer"
										>
											Github Repo
										</a>
									</p>
								</div>
							</div>
						</main>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Projects;
