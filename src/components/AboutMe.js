import React, { Suspense } from "react";
import Loading from "./Loading";
const Img = React.lazy(() => import("./Img"));

function AboutMe() {
	return (
		<div className="aboutMe section" id="aboutMe">
			<h1 className="heading" data-aos="fade-up">
				About Me
			</h1>
			<div className="content">
				<p className="aboutMe__para" data-aos="fade-up">
					Heya User, I am Samyak, Front-End Developer as well as a First-year
					undergraduate student. I am currently pursuing BCA from Christ
					University (Delhi NCR). I have experience of 2 years in making various
					kinds of web apps as you can see my <a href="#projects">Projects</a>.
					I like web development as it gives me joy and brings ideas to my mind
					and it makes me feel stressed out and relaxed. I know a lot of
					front-end libraries as you can see in the{" "}
					<a href="#skills">skills section </a>.
				</p>
				<div className="imgContainer" data-aos="fade-up">
					<Suspense fallback={<Loading />}>
						<Img src="./images/about.jpg" alt="" />
					</Suspense>
					<div className="img-overlay">
						<p>Just a regular image</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
