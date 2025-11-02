import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
	return (
		<div>
			<h1 className="text-3xl ">Hello GSAP</h1>
		</div>
	);
};

export default App;
