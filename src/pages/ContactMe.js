import React from 'react';
// Import Framer Motion 
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from "../animation";
// Import Styled Components
import styled from 'styled-components';

const ContactMe = () => {
    return(
        <ContactStyle 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show" 
            exit="exit"
            style={{background: "#fff"}}
         >
            <StyledTitle>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </StyledTitle>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                            <h3><h2>Github</h2>https://github.com/shenalt</h3>  
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                            <h3><h2>Email</h2>tisserashenal@gmail.com</h3>      
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle/>
                            <h3><h2>LinkedIn</h2>https://www.linkedin.com/in/shenalt/</h3>                    
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1150px){
        padding: 2rem;
        font-size: 1rem;
    }
`;

const StyledTitle = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1150px){
        margin-top: 5rem;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h3{
        margin: 2rem;
        color: black;
    }
`;

export default ContactMe;