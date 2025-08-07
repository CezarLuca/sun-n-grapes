"use client";

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
            </div>
        </footer>
    );
};

export default Contact;
