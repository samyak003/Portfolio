import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Cretificates from "./components/Cretificates";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({ delay: 350 });
	}, []);
	return (
		<div className="App">
			<Header />
			<div className="not-header">
				<Main />
				<AboutMe />
				<Skills />
				<Projects />
				<Cretificates />
				<ContactMe />
			</div>
		</div>
	);
}

export default App;
