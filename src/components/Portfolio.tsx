import {JSX} from "react";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import {images} from "@/util/images";

export default function Portfolio(): JSX.Element {
    // const images = getFilesFromPublicFolder("images/portfolio");
    return <PortfolioCarousel images={images}/>;
}
