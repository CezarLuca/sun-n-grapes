import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

export default function Home() {
    return (
        <main>
            <Navbar />
            <HeroSection />
            <div className="h-dvh bg-black" />
        </main>
    );
}
