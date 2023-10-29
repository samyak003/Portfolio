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
			time: "March 2022 - April 2023",
			url: { title: "Website", href: "https://codersbake.in" },
		},
		{
			company: "Newton School Coding Club, Christ University (Delhi NCR)",
			position: "President",
			time: "September 2022 - May 2023",
			url: { title: "Letter of Appointment", href: "./images/nscc.pdf" },
		},
		{
			company: "Smartinternz & Google",
			position: "Android Dev. Intern",
			time: "August 2022 - October 2022",
			url: {
				title: "Certificate Verification Link",
				href: "https://smartinternz.com/internships/google_stu_certificates/a0f1a0686c4ecffbf795ea2d2a42817e",
			},
		},
		{
			company: "BuildMyBody",
			position: "Web Developer",
			time: "July 2023 - Present",
		},
		{
			company: "School of Sciences, Christ University",
			position: "Web dev. Intern (Blog-sos)",
			time: "October 2022 - December 2022",
			url: { title: "Website", href: "https://blog-sos.netlify.app" },
		},
		{
			company: "Snapchat Opinion Leader by Under25",
			position: "Participant",
			time: "September 2022 - December 2022",
			url: {
				title: "Letter of Recommendation",
				href: "./images/Under25.pdf",
			},
		},
		{
			company: "Ambimed",
			position: "Tech Intern",
			time: "November 2022 - July 2023",
		},
		{
			company: "Gifto Locks",
			position: "Web Developer",
			time: "January 2021 - March 2021",
		},
	];
	return (
		<div className="experience section" id="experience">
			<h1 className="heading" data-aos="fade-up">
				Experience
			</h1>
			<div className="content" data-aos="fade-up">
				<ul className="sessions">
					{list.map((experience) => (
						<li>
							<p className="company">{experience.company}</p>
							<p className="position">{experience.position}</p>
							<p className="time">{experience.time}</p>
							{experience.url && (
								<a className="url" href={experience.url.href}>
									{experience.url.title}
								</a>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Experience;
