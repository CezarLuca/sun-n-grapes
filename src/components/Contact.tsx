"use client";

import { openingHours, socials } from "@/app/constants";

/* eslint-disable @next/next/no-img-element */
const Contact = () => {
    return (
        <footer id="contact">
            <img
                src="/images/footer-right-leaf.png"
                alt="leaf-right"
                id="f-right-leaf"
            />
            <img
                src="/images/footer-left-leaf.png"
                alt="leaf-left"
                id="f-left-leaf"
            />
            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>454, Buna Vista Blvd. #401, Los Angeles, CA 90210</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>(123) 456-7890</p>
                    <p>hello@cocktail.com</p>
                </div>
                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day}: {time.time}
                        </p>
                    ))}
                </div>
                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} alt={`${social.name}`} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
