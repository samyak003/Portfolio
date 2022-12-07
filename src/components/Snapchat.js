import React, { Suspense } from "react";
import Loading from "./Loading";
const Img = React.lazy(() => import("./Img"));

function Snapchat() {
	return (
		<div className="snapchat section" id="snapchat">
			<h1 className="heading" data-aos="fade-up">
				Snapchat Creator Profile
			</h1>
			<div className="content"></div>
		</div>
	);
}

export default Snapchat;
