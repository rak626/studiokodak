import Image from "next/image";

interface Props {
    images: string[];
}

export default function PortfolioGrid({images}: Props) {
    return (
        <section
            id="portfolio"
            className="py-32 bg-linear-to-b from-[#faf7f2] to-white"
        >
            {/* Reduced padding on mobile */}
            <div className="mx-auto sm:px-1 md:px-6 md:max-w-6xl">
                <h3 className="text-4xl font-semibold text-center">
                    Featured Work
                </h3>

                <div className="mt-20 grid grid-cols-1 gap-2 md:gap-8">
                    {images.map((img, index) => (
                        <div
                            key={img + "___" + index}
                            className="
                                bg-neutral-50
                                rounded-md
                                overflow-hidden
                                w-full
                            "
                        >
                            <Image
                                src={img}
                                alt="Wedding photography work"
                                width={1600}
                                height={1000}
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 1200px"
                                quality={75}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
