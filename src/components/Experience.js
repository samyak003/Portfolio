import React, { Suspense } from "react";
import Loading from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Img = React.lazy(() => import("./Img"));

function Experience() {
	const list = [
		{
			company: "Coders Bake",
			position: "Founder",
			time: "March 2022 - Present",
		},
		{
			company: "Newton School Coding Club, Christ University (Delhi NCR)",
			position: "President",
			time: "September 2022 - Present",
		},
		{
			company: "Smartinternz & Google",
			position: "Android Dev. Intern",
			time: "August 2022 - October 2022",
		},
		{
			company: "School of Sciences, Christ University",
			position: "Web dev. Intern (Blog-sos)",
			time: "October 2022 - Present",
		},
		{
			company: "Snapchat Opinion Leader by Under25",
			position: "Participant",
			time: "September 2022 - Present",
		},
		{
			company: "Ambimed",
			position: "Tech Intern",
			time: "November 2022 - Present",
		},
	];
	return (
		<div className="experience section" id="experience">
			<h1 className="heading" data-aos="fade-up">
				Experience
			</h1>
			<div className="content" data-aos="fade-up">
				<ul class="sessions">
					{list.map((experience) => (
						<li>
							<p className="company">{experience.company}</p>
							<p className="position">{experience.position}</p>
							<p className="time">{experience.time}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Experience;
