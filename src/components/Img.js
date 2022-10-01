import React from "react";

function Img({ src, alt }) {
	return <img src={src} alt={alt} loading="lazy" />;
}

export default Img;
