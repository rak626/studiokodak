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
            <div className="max-w-6xl mx-auto px-6">
                <h3 className="text-4xl font-semibold text-center">
                    Featured Work
                </h3>

                <div className="mt-20 grid grid-cols-1 gap-2 md:gap-8">
                    {images.map((img, index) => (
                        <div
                            key={img}
                            className="flex justify-center bg-neutral-50"
                        >
                            <Image
                                src={`/images/portfolio/${img}`}
                                alt="Wedding photography work"
                                width={1600}
                                height={1000}
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, auto"
                                quality={75}
                                className="h-auto max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
