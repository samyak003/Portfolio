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
					Greetings! I'm Samyak, a passionate Front-End Developer and a
					final-year undergraduate student pursuing BCA at Christ University
					(Delhi NCR). With a 3-year experience in crafting diverse web apps, my{" "}
					<a href="#projects">Projects</a> showcase the breadth of my skills.
					Web development not only brings me joy but also sparks creative ideas,
					serving as a source of both stress relief and relaxation. Proficient
					in various front-end libraries, as indicated in the{" "}
					<a href="#skills">Skills Section </a>, I also indulge in creating
					Snapchat lenses as a hobby. Explore my lenses on my{" "}
					<a href="https://lensstudio.snapchat.com/creator/wVkTUDm9Qe43KKSgbCXrjA">
						Snapchat Creator Profile
					</a>
					.
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
