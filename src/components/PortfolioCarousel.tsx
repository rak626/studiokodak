"use client";

import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface Props {
    images: string[];
}

const IMAGE_WIDTH = 440;
const GAP = 40;
const STEP = IMAGE_WIDTH + GAP;
const AUTO_DURATION = 30;

export default function PortfolioCarousel({images}: Props) {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);
    const [manualOffset, setManualOffset] = useState(0);

    const duplicatedImages = [...images, ...images];
    const maxOffset = images.length * STEP;

    /* ================= AUTO SCROLL ================= */

    const startAutoScroll = async () => {
        await controls.start({
            x: -maxOffset,
            transition: {
                duration: AUTO_DURATION,
                ease: "linear",
                repeat: Infinity,
            },
        });
    };

    const stopAutoScroll = async () => {
        await controls.stop();
    };

    useEffect(() => {
        if (!isHovered) startAutoScroll();
        else stopAutoScroll();
    }, [isHovered]);

    /* ================= MANUAL NAV ================= */

    const handlePrev = async () => {
        await stopAutoScroll();
        setManualOffset((prev) => Math.min(prev + STEP, 0));
        controls.set({x: manualOffset + STEP});
    };

    const handleNext = async () => {
        await stopAutoScroll();
        setManualOffset((prev) => Math.max(prev - STEP, -maxOffset + STEP * 3));
        controls.set({x: manualOffset - STEP});
    };

    const canGoLeft = manualOffset < 0;
    const canGoRight = manualOffset > -maxOffset + STEP * 3;

    /* ================= RENDER ================= */

    return (
        <section id="portfolio" className="py-32 overflow-hidden bg-linear-to-b from-[#faf7f2] to-white">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-4xl font-semibold text-center">
                    Featured Work
                </h3>

                <div
                    className="relative mt-20"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* LEFT BUTTON */}
                    {isHovered && canGoLeft && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow hover:bg-white transition"
                        >
                            <ChevronLeft/>
                        </button>
                    )}

                    {/* RIGHT BUTTON */}
                    {isHovered && canGoRight && (
                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 p-3 rounded-full shadow hover:bg-white transition"
                        >
                            <ChevronRight/>
                        </button>
                    )}

                    {/* VIEWPORT */}
                    <div className="overflow-hidden">
                        <motion.div
                            ref={containerRef}
                            animate={controls}
                            initial={{x: 0}}
                            className="flex"
                            style={{gap: `${GAP}px`}}
                        >
                            {duplicatedImages.map((img, i) => (
                                <div
                                    key={img + i}
                                    className="relative shrink-0 w-110 aspect-3/4 rounded-2xl overflow-hidden shadow-xl bg-neutral-100"
                                >
                                    <Image
                                        src={`/images/portfolio/${img}`}
                                        alt="Portfolio image"
                                        fill
                                        sizes={`max-width: 768px 100vw, 440px`}
                                        quality={75}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
