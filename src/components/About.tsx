import Image from "next/image";
import {JSX} from "react";
import {Profile} from "@/util/profile";

export default function About(): JSX.Element {
    return (
        <section
            id="about"
            className="relative py-28"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Left: Text Content */}
                <div>
                    {/* Section Label */}
                    <span className="text-sm tracking-widest uppercase text-neutral-500">
            About Us
          </span>

                    {/* Heading */}
                    <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-neutral-900">
                        Studio Kodak
                    </h3>

                    {/* Description */}
                    <p className="mt-6 text-[15px] leading-relaxed text-neutral-600">
                        {Profile.about}
                    </p>

                    {/* Signature */}
                    <p className="mt-6 text-sm text-neutral-500">
                        — Animesh Mishra, Founder
                    </p>
                </div>

                {/* Right: Image */}
                <div className="relative flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[3/4]">
                        <Image
                            src="/images/studio_kodak_owner.jpg"
                            alt="Studio Kodak Founder"
                            fill
                            priority
                            className="rounded-2xl object-cover shadow-xl"
                            sizes="(max-width: 768px) 80vw, 360px"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
