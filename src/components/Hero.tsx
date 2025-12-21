import React from "react";
import {Rouge_Script} from "next/font/google";

const rougeScript = Rouge_Script({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const Hero = () => {
    return (
        <section className="relative flex min-h-[70vh] items-center justify-center bg-[#f5f2ed] px-6">
            <div className="relative text-center">

                {/* Main Brand */}
                <h1
                    className={`${rougeScript.className} text-[clamp(4rem,10vw,9rem)] tracking-wider leading-none text-neutral-900`}
                >
                    Studio Kodak
                </h1>

                {/* Divider */}
                <div className="mx-auto my-6 h-px w-24 bg-neutral-400"/>

                {/* Subtitle */}
                <p
                    className={`${rougeScript.className} text-[clamp(2rem,4vw,4rem)] tracking-wider text-neutral-700`}
                >
                    Photography
                </p>
            </div>
        </section>
    );
};

export default Hero;
