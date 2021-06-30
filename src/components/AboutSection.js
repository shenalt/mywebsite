// *****YOU MIGHT HAVE TO UNINSTALL AND INSTALL FRAMER MOTION AGAIN***** //
import React from 'react';
// Import Framer Motion
import {motion} from 'framer-motion';
import {titleAnimation, fade, photoAnimation} from '../animation';
import Wave from './Wave';
// Import Images
import home1 from '../img/home1.png';
import me from '../img/me.jpg';
// Import Styled Components
import styled from 'styled-components';
// Import Styles
import {
    StyledAbout,
    StyledDescription,
    StyledHide,
    StyledImage,
} from '../styles';
// Import useScroll
import {useScroll} from './useScroll';
// Import scrollReveal
import {scrollReveal} from "../animation";
// Import Link from react-router-dom
import {Link} from 'react-router-dom';

const AboutSection = () => {
    const titleAnim = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2} },
    };
    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {duration: 0.75, ease: "easeIn", staggerChildren: 1, when: "afterChildren",} },
    };
    const [element, controls] = useScroll();
    return(
        <StyledAbout variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <StyledDescription>
                <motion.div>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}> 
                            Welcome!
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>My name is</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}><span>Shenal Tissera</span></motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={fade}>
                I am a Data Science enthusiast, web developer, and political junkie based
                in New York!
                </motion.p>
                <Link to="/contact">
                    <motion.button variants={fade}>Contact me</motion.button>
                </Link>
            </StyledDescription>
            <StyledImage>
                <motion.img variants={photoAnimation} initial='hidden' animate='show' src={me} alt="home img"/>
            </StyledImage>
            <Wave />
        </StyledAbout>
    );
};

export default AboutSection;