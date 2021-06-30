import React from 'react';
// Import React Intersection Observer 
import {useInView} from 'react-intersection-observer';
// Import Framer Motion  
import {useAnimation} from 'framer-motion';

export const useScroll = () => {
    const controls = useAnimation();
    const [element, view] = useInView({threshold: 0.3});
    if(view){
        controls.start('show');
    } else{
        controls.start('hidden');
    }
    return [element, controls];
};