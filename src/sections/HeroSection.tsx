/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";

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
            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>
                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is a blend of premium
                            ingredients, creative flair, and timeless recipes -
                            designed to delight your senses.
                        </p>
                        <Link href={`#cocktails`}>View Cocktails</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
