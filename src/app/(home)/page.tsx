import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PortfolioPage from "@/app/(home)/portfolio/page";
import ServicesPage from "@/app/(home)/services/page";
import AboutPage from "@/app/(home)/about/page";
import PricingPage from "@/app/(home)/pricing/page";
import ContactPage from "@/app/(home)/contact/page";
import Section from "@/components/Section";

export default function Home() {
    return (
        <>
            <Hero/>

            <Section variant="alt">
                <PortfolioPage/>
            </Section>

            <Section>
                <ServicesPage/>
            </Section>

            <Section variant="alt">
                <AboutPage/>
            </Section>

            <Section>
                <PricingPage/>
            </Section>

            <Section variant="alt">
                <ContactPage/>
            </Section>

            <Footer/>
        </>
    );
}
