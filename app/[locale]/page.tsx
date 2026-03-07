import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Packages from "@/components/sections/Packages";
import Locations from "@/components/sections/Locations";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";

export const runtime = "edge";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Packages />
            <Locations />
            <Team />
            <Testimonials />
            <FAQ />
            <CTABanner />
        </>
    );
}
