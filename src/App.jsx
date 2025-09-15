import HeroSection from "./components/HeroSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import FeatureCard from "./components/FaetureCard.jsx";
import TestimonialSection from "./components/TestimonialSection.jsx";
import TestimonialCard from "./components/TestimonialCard.jsx";
import SecondaryCTA from "./components/SecondaryCTA.jsx";
import Footer from "./components/Footer.jsx";

function App(){
    return(
        <>
        <HeroSection/>
            <FeatureSection/>
            <FeatureCard/>
            <GallerySection/>
            <TestimonialSection/>
            <TestimonialCard/>
            <SecondaryCTA/>
            <Footer/>
        </>
    )
}
export default App;