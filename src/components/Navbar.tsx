import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
            },
        });

        navTween.fromTo(
            "nav",
            {
                backgroundColor: "transparent",
            },
            {
                backgroundColor: "#0000050",
                backgroundFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
            }
        );
    });

    return (
        <nav>
            <div>
                <Link href="#home" className="flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Velvet Pour Logo"
                        width={25}
                        height={25}
                    />
                    <p>Velvet Pour</p>
                </Link>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={`#${link.id}`}
                                className="hover:text-gray-300"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
