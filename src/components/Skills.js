import React, { Suspense } from "react";
import Loading from "./Loading";
const Img = React.lazy(() => import("./Img"));

function Skills() {
	const skills = [
		{ title: "Html", img: "./images/html.png" },
		{ title: "CSS", img: "./images/css.png" },
		{ title: "Javascript", img: "./images/javascript.webp" },
		{ title: "Typescript", img: "./images/typescript.png" },
		{ title: "React.Js", img: "./images/react.png" },
		{ title: "Next.Js", img: "./images/nextjs.png" },
		{ title: "Scss", img: "./images/scss.png" },
		{ title: "Bootstrap", img: "./images/bootstrap.png" },
		{ title: "Tailwind Css", img: "./images/tailwind.png" },
		{ title: "Netlify", img: "./images/netlify.png" },
		{ title: "Python", img: "./images/python.png" },
		{ title: "Firebase", img: "./images/firebase.png" },
		{ title: "Git", img: "./images/git.png" },
		{ title: "NPM", img: "./images/npm.png" },
	];
	return (
		<div className="skills section" id="skills">
			<h1 className="heading" data-aos="fade-up">
				Skills
			</h1>
			<main>
				<ul className="cards">
					{skills.map((skill, index) => (
						<li className="card" key={index} data-aos="fade-up">
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
