import React from "react";
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactMe() {
	return (
		<div className="contactMe section" id="contactMe">
			<h1 className="heading">Contact Me</h1>
			<main>
				<ul className="contactMe__socials">
					<li className="contactMe__socialsLink">
						<a
							href="https://github.com/samyak003"
							target="blank"
							rel="noreferrer"
						>
							<section>
								<h2>Github</h2>
								<div>
									<FontAwesomeIcon icon={faGithub} /> <p>@samyak003</p>
								</div>
							</section>
						</a>
					</li>
					<li className="contactMe__socialsLink">
						<a
							href="https://www.linkedin.com/in/samyak003/"
							target="blank"
							rel="noreferrer"
						>
							<section>
								<h2>LinkedIn</h2>
								<div>
									<FontAwesomeIcon icon={faLinkedin} /> <p>@samyak003</p>
								</div>
							</section>
						</a>
					</li>
					<li className="contactMe__socialsLink">
						<a
							href="https://instagram.com/samyak003"
							target="blank"
							rel="noreferrer"
						>
							<section>
								<h2>Instagram</h2>
								<div>
									<FontAwesomeIcon icon={faInstagram} /> <p>@samyak003</p>
								</div>
							</section>
						</a>
					</li>
					<li className="contactMe__socialsLink">
						<a
							href="https://twitter.com/samyak003"
							target="blank"
							rel="noreferrer"
						>
							<section>
								<h2>Twitter</h2>
								<div>
									<FontAwesomeIcon icon={faTwitter} /> <p>@samyak003</p>
								</div>
							</section>
						</a>
					</li>
				</ul>
				<form
					className="contactMe__form"
					name="contact-form"
					method="POST"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact-form" />
					<div className="inputField">
						<label htmlFor="name" id="name">
							Name
						</label>
						<br />
						<input type="text" name="name" required />
					</div>
					<div className="inputField">
						<label htmlFor="email">Email</label>
						<br />
						<input type="email" id="email" name="email" required />
					</div>
					<div className="inputField">
						<label htmlFor="contactno">Contact No.</label>
						<br />
						<input type="number" name="contactno" id="contactno" required />
					</div>
					<div className="inputField">
						<label htmlFor="description">Description</label>
						<br />
						<textarea rows="5" name="description" id="description" required />
					</div>
					<div className="inputField">
						<button type="submit" className="btn">
							Send Message
						</button>
					</div>
				</form>
			</main>
		</div>
	);
}

export default ContactMe;
