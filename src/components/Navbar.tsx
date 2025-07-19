import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
