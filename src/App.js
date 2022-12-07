import { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Works from "./components/Works";
import Experience from "./components/Experience";
const AboutMe = lazy(() => import("./components/AboutMe"));
const ContactMe = lazy(() => import("./components/ContactMe"));
const Cretificates = lazy(() => import("./components/Cretificates"));
const Header = lazy(() => import("./components/Header"));
const Main = lazy(() => import("./components/Main"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
	useEffect(() => {
		AOS.init({ delay: 350 });
	}, []);
	return (
		<div className="App">
			<Suspense fallback={<></>}>
				<Header />
			</Suspense>
			<div className="not-header">
				<Suspense fallback={<></>}>
					<Main />
				</Suspense>
				<Suspense fallback={<></>}>
					<AboutMe />
				</Suspense>
				<Suspense fallback={<></>}>
					<Experience />
				</Suspense>
				<Suspense fallback={<></>}>
					<Works />
				</Suspense>
				<Suspense fallback={<></>}>
					<Projects />
				</Suspense>
				<Suspense fallback={<></>}>
					<Skills />
				</Suspense>
				<Suspense fallback={<></>}>
					<Cretificates />
				</Suspense>
				<Suspense fallback={<></>}>
					<ContactMe />
				</Suspense>
			</div>
		</div>
	);
}

export default App;
