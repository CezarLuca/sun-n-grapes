"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <div className="h-dvh bg-black" />
        </main>
    );
}
