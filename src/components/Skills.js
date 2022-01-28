import React, { Suspense } from "react";
import Loading from "./Loading";
const Img = React.lazy(() => import("./Img"));

function Skills() {
	const skills = [
		{ title: "Html", img: "./images/html.png" },
		{ title: "CSS", img: "./images/css.png" },
		{ title: "Javascript", img: "./images/javascript.webp" },
		{ title: "React", img: "./images/react.png" },
		{ title: "Scss", img: "./images/scss.png" },
		{ title: "Python", img: "./images/python.png" },
		{ title: "NPM", img: "./images/npm.png" },
		{ title: "Git", img: "./images/git.png" },
	];
	return (
		<div className="skills section" id="skills">
			<h1 className="heading">Skills</h1>
			<main>
				<ul className="cards">
					{skills.map((skill, index) => (
						<li className="card" key={index}>
							<div className="logo-container">
								<Suspense fallback={<Loading />}>
									<Img src={skill.img} alt="" />
								</Suspense>
							</div>
							<div className="detail">
								<p className="title">{skill.title}</p>
							</div>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
}

export default Skills;
