import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// Import Images
//import athlete from '../img/athlete-small.png';
//import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import weather from '../img/weather.png';
import music_player from '../img/music_player.png';
import stroke from '../img/stroke.png';
// Import Framer Motion 
import {motion} from 'framer-motion';
import {pageAnimation, 
        fade, 
        photoAnimation, 
        lineAnimation, 
        slider, 
        sliderContainer} 
from "../animation";
// Import useScroll
import {useScroll} from '../components/useScroll';
// Import ScrollTop
import ScrollTop from '../components/ScrollTop';

const MyWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return(
        <StyledWork 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show" 
            exit="exit"
            style={{background: "#fff"}}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie initial="show">
                <motion.h2 variants={fade}>Weather App</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                    <Hide>
                        <a href="https://shenalt.github.io/weather/">
                            <motion.img variants={photoAnimation} src={weather} alt="weather" />
                        </a>
                    </Hide>
            </StyledMovie>
            
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>The Stroke Predictor</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Hide>
                    <a href="https://the-stroke-predictor.herokuapp.com/">
                        <img src={stroke} alt="The Stroke Predictor" />
                    </a>
                </Hide>
            </StyledMovie>
            <ScrollTop />
        </StyledWork>
    );
};

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    @media (max-width: 1150px){
        padding: 2rem 2rem;
    }
    //h2{
    //    padding: 1rem 0rem;
    //}
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background-color: #23D997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #FFFEBF;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #FF8EFB;
`;

const Frame3 = styled(Frame1)`
    background: #8ED2FF;
`;

const Frame4 = styled(Frame1)`
    background: #8EFFA0;
`;

export default MyWork;