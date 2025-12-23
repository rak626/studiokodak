import {JSX} from "react";
import {getFilesFromPublicFolder} from "@/lib/getFilesFromFolder";
import PortfolioCarousel from "@/components/PortfolioCarousel";

export default function Portfolio(): JSX.Element {
    const images = getFilesFromPublicFolder("images/portfolio");

    return <PortfolioCarousel images={images}/>;
}
