"use client";

import Image from "next/image";
import {ServicesList} from "@/util/data";
import {ServiceType} from "@/util/type";
import {JSX, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {getGalleryImages} from "@/actions/getGalleryImages";

// shadcn carousel
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export default function ServicesCardsOptimized(): JSX.Element {
    const [activeService, setActiveService] = useState<ServiceType | null>(null);
    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    // Fetch gallery images ONLY when modal opens
    useEffect(() => {
        if (!activeService?.gallery) {
            return;
        }

        const fetchGallery = async () => {
            const images = await getGalleryImages(
                "/images/photography/" + activeService.gallery
            );
            setGalleryImages(images);
        };

        fetchGallery();
    }, [activeService]);

    return (
        <section id="services" className="py-28 bg-linear-to-b from-[#faf7f2] to-white">
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
                        hidden: {},
                        visible: {
                            transition: {staggerChildren: 0.15},
                        },
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
                            className="group bg-linear-to-b from-[#faf7f2] to-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
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
                                    sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Hover Overlay */}
                                <div
                                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => setActiveService(service)}
                                        className="px-6 py-3 text-xs tracking-widest uppercase bg-white text-black rounded-full"
                                    >
                                        View Gallery
                                    </button>
                                </div>
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

            {/* Modal Gallery */}
            <AnimatePresence>
                {activeService && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 z-50 bg-black/70 overflow-y-auto"
                        onClick={() => setActiveService(null)}
                    >
                        <div className="min-h-screen flex items-center justify-center px-6 py-12">
                            <motion.div
                                initial={{scale: 0.92, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                exit={{scale: 0.92, opacity: 0}}
                                transition={{duration: 0.3}}
                                className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Carousel */}
                                <div className="p-6">
                                    <Carousel
                                        opts={{align: "center", loop: false}}
                                        className="relative w-full max-w-5xl mx-auto"
                                    >
                                        {galleryImages.length > 0 ? <><CarouselContent>
                                            {galleryImages.map((img, i) => (
                                                <CarouselItem key={img} className="flex justify-center">
                                                    <div
                                                        className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
                                                        <Image
                                                            src={`/images/${img}`}
                                                            alt={`${activeService.name} ${i + 1}`}
                                                            fill
                                                            priority={i === 0}
                                                            quality={75}
                                                            sizes="(max-width:768px) 100vw, 80vw"
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>

                                            {/* Controls */}
                                            <CarouselPrevious
                                                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white"/>
                                            <CarouselNext
                                                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white"/>
                                        </> : <CarouselContent>
                                            <CarouselItem className="flex justify-center">
                                                <div
                                                    className="relative w-full overflow-hidden rounded-xl">
                                                    <p>Sorry No images</p>
                                                </div>
                                            </CarouselItem>
                                        </CarouselContent>}
                                    </Carousel>
                                </div>


                                {/*/!* Modal Footer *!/*/}
                                {/*<div className="px-6 pb-6">*/}
                                {/*    <h3 className="text-2xl font-semibold mb-2">*/}
                                {/*        {activeService.name}*/}
                                {/*    </h3>*/}
                                {/*    <p className="text-neutral-600">*/}
                                {/*        {activeService.description}*/}
                                {/*    </p>*/}
                                {/*</div>*/}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
