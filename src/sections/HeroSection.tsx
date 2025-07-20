/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = () => {
    return (
        <section id="hero" className="noisy">
            <h1 className="title">Grapes n&apos; Sun</h1>
            <img
                src="/images/hero-left-leaf.png"
                alt="left-leaf"
                className="left-leaf"
            />
            <img
                src="/images/hero-right-leaf.png"
                alt="right-leaf"
                className="right-leaf"
            />
        </section>
    );
};

export default HeroSection;
