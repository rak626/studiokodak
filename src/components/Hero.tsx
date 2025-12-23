import {Rouge_Script} from "next/font/google";
import Link from "next/link";

const rougeScript = Rouge_Script({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
});

const Hero = () => {
    return (
        <section
            className="relative flex flex-col min-h-[90vh]  bg-bg-base items-center justify-center px-6">
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
                    className={`mt-4 text-lg md:text-xl text-neutral-700`}
                >
                    Professional, Wedding, Portrait & Creative Photography
                </p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
                <Link href="#portfolio">
                    <button
                        type="button"
                        className="bg-black text-white px-6 py-3 rounded-full font-medium"
                    >
                        View Portfolio
                    </button>
                </Link>
                <Link href="#contact">
                    <button
                        type="button"
                        className="border border-black px-6 py-3 rounded-full font-medium"
                    >
                        Book a Session
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
