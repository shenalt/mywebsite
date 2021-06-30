import React from 'react';
// Import Icons/Images
import home2 from '../img/home2.png';
import java from '../img/java.svg';
import javascript from '../img/javascript.svg';
import react from '../img/react.svg';
import python from '../img/python.svg';
import cplus from '../img/c++.svg';
import flask from '../img/flask.svg';
// Import Styled Components
import styled from 'styled-components';
import {
    StyledAbout,
    StyledDescription,
    StyledImage,
} from '../styles';
// Import useScroll
import {useScroll} from './useScroll';
// Import scrollReveal
import {scrollReveal} from "../animation";
// Import FontAweseome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ServicesSection = () => {
    const [element, controls] = useScroll();
    return(
        <StyledServices variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <StyledDescription>
                <h2>Programming <span>Proficiency</span></h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img alt="icon" src={python}/>
                            <h3>Python</h3>
                        </div>
                        <p>Highly Proficient.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt="icon" src={javascript}/>
                            <h3>Javascript</h3>
                        </div>
                        <p>Highly Proficient.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt="icon" src={react}/>
                            <h3>React</h3>
                        </div>
                        <p>Highly Proficient.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt="icon" src={java}/>
                            <h3>Java</h3>
                        </div>
                        <p>Proficient.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt="icon" src={cplus}/>
                            <h3>C++</h3>
                        </div>
                        <p>Proficient.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img alt="icon" src={flask}/>
                            <h3>Flask</h3>
                        </div>
                        <p>Proficient.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            
        </StyledServices>
    );
};

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding-top: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1150px){
        justify-content: center;
    }
`;

const StyledCard = styled.div`
    flex-basis: 15rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;

export default ServicesSection;