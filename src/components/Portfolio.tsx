import {JSX} from "react";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import {getImages} from "@/lib/getImages";


export default async function Portfolio(): Promise<JSX.Element> {
    const imagesObjectArray = await getImages();
    const images = imagesObjectArray
        .map((img: { secure_url?: string }) => img.secure_url)
        .filter(Boolean);
    return <PortfolioCarousel images={images}/>;
}
