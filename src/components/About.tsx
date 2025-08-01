/* eslint-disable @next/next/no-img-element */
const About = () => {
    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters{" "}
                            <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Every cocktail tells a story, and at our bar, we
                            believe in crafting each one with care and
                            precision. From the selection of the finest
                            ingredients to the artful presentation, we ensure
                            that every sip is a journey of flavor and
                            experience. Join us to explore a world where
                            mixology meets passion, and every drink is a
                            masterpiece.
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                More than +12000 customers happy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className="md:col-span-3">
                    <div className="noisy" />
                    <img src="/images/abt1.png" alt="grid-img-1" />
                </div>
            </div>
        </div>
    );
};

export default About;
