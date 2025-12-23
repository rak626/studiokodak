import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PortfolioPage from "@/app/(home)/portfolio/page";
import ServicesPage from "@/app/(home)/services/page";
import AboutPage from "@/app/(home)/about/page";
import PricingPage from "@/app/(home)/pricing/page";
import ContactPage from "@/app/(home)/contact/page";

export default function Home() {
    return (
        <div className={`bg-bg-base`}>
            <Hero/>
            <hr className={`my-1`}/>
            <PortfolioPage/>
            <hr className={`my-1`}/>
            <ServicesPage/>
            <hr className={`my-1`}/>
            <AboutPage/>
            <hr className={`my-1`}/>
            <PricingPage/>
            <hr className={`my-1`}/>
            <ContactPage/>
            <hr className={`my-1`}/>
            <Footer/>
        </div>
    );
}
