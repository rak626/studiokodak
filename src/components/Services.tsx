"use client";

import Image from "next/image";
import {ServicesList} from "@/util/services";
import {ServiceType} from "@/util/type";
import {JSX} from "react";
import {motion} from "framer-motion";

export default function ServicesCardsOptimized(): JSX.Element {
    return (
        <section id="services" className="py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-semibold">Our Services</h2>
                    <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
                        Timeless wedding photography crafted with emotion,
                        elegance, and storytelling.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, margin: "-100px"}}
                    variants={{
                        visible: {transition: {staggerChildren: 0.15}},
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {ServicesList.map((service: ServiceType, index: number) => (
                        <motion.div
                            key={service.name}
                            variants={{
                                hidden: {opacity: 0, y: 30},
                                visible: {opacity: 1, y: 0},
                            }}
                            transition={{duration: 0.5, ease: "easeOut"}}
                            className="bg-linear-to-b from-[#faf7f2] to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-4/5 overflow-hidden">
                                <Image
                                    src={`/images/${service.imgName}`}
                                    alt={service.name}
                                    fill
                                    priority={index === 0}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    quality={70}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-8">
                                {service.category && (
                                    <span className="block mb-3 text-xs tracking-widest uppercase text-neutral-400">
                    {service.category}
                  </span>
                                )}

                                <h3 className="text-2xl font-semibold mb-4">
                                    {service.name}
                                </h3>

                                <p className="text-neutral-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
