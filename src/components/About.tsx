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
                    {/* Soft frame */}
                    <div className="absolute -inset-4 rounded-3xl "/>

                    <Image
                        src="/images/studio_kodak_owner.jpg"
                        alt="Studio Kodak Founder"
                        width={360}
                        height={480}
                        priority
                        className="relative rounded-2xl object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
