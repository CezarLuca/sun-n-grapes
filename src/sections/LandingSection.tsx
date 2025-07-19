import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const LandingSection = () => {
    return (
        <div className="flex-center h-[100vh]">
            <h1 className="text-3xl text-indigo-300">Hello, GSAP!</h1>
            <div className="text-xl text-gray-50">Technical Check</div>
        </div>
    );
};

export default LandingSection;
