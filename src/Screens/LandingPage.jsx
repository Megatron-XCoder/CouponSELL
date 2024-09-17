import { useRef } from "react";
import Navbar from "../Components/Navbar.jsx";
import CardGroup from "../Components/CardGroup.jsx";
import FooterPart from "../Components/Footer.jsx";
import CarouselSlider from "../Components/Carousel.jsx";
import UserReview from "../Components/UserReview.jsx";
import ContactForm from "../Components/ContactForm.jsx";

export default function LandingPage() {
    const topRef = useRef(null);
    const cardGroupRef = useRef(null);
    const contactFormRef = useRef(null);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToCardGroup = () => {
        cardGroupRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContactForm = () => {
        contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Navbar scrollToTop={scrollToTop} scrollToCardGroup={scrollToCardGroup} scrollToContactForm={scrollToContactForm} />
            <div ref={topRef}>
                <CarouselSlider />
            </div>
            <div ref={cardGroupRef}>
                <CardGroup />
            </div>
            <UserReview />
            <div ref={contactFormRef}>
                <ContactForm />
            </div>
            <FooterPart />
        </>
    );
}
