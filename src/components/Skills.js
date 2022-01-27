import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Skills() {
	return (
		<div className="skills section" id="skills">
			<h1 className="heading">Skills</h1>
			<main>
				<ul className="cards">
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/html.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">Html</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/css.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">Css</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/javascript.webp" alt="" />
						</div>
						<div className="detail">
							<p className="title">Javascript</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/react.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">React</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/scss.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">Scss</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/python.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">Python</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/npm.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">NPM</p>
						</div>
					</li>
					<li className="card">
						<div className="logo-container">
							<LazyLoadImage src="./images/git.png" alt="" />
						</div>
						<div className="detail">
							<p className="title">Git</p>
						</div>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default Skills;
