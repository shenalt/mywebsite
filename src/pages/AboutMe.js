import React from 'react';
// Import Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
// Import Framer Motion 
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation";
// Import ScrollTop
import ScrollTop from '../components/ScrollTop';

const AboutMe = () => {
    return(
        <>
            <motion.div 
                variants={pageAnimation} 
                initial="hidden" 
                animate="show" 
                exit="exit"
            >
                <AboutSection />
                <ServicesSection />
                <FaqSection />
                <ScrollTop />
            </motion.div>
        </>
    );
};

export default AboutMe;