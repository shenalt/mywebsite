import React from 'react';
// Import Styled Components
import styled from 'styled-components';
import {StyledAbout} from '../styles';
// Import Components 
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
// Import useScroll
import {useScroll} from './useScroll';
// Import Animation
import {scrollReveal} from '../animation';
const FaqSection = () => {
    const [element, controls] = useScroll();
    return(
        <StyledFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="Where did I go to school?">
                    <div className="answer">
                        <p>I was a Macaulay Honors Scholar at CUNY Brooklyn College.</p>
                    </div>
                </Toggle>
                <Toggle title="Where am I located?">
                    <div className="answer">
                        <p>I was born and raised in Staten Island, New York and currently live there.</p>
                    </div>
                </Toggle>
                <Toggle title="What is my degree in?">
                    <div className="answer">
                        <p>I have a B.S. in Computer Science and a minor in Economics.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    );
};

const StyledFaq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;