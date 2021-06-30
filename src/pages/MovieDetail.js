import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../MovieState';
// Import Framer Motion 
import {motion} from 'framer-motion';
import {pageAnimation} from "../animation";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0]);
        console.log(movie);
    }, [movies, url]);
    return(
        <>
        {movie && (
        <StyledDetails
            variants={pageAnimation} 
            initial="hidden" 
            animate="show" 
            exit="exit"
        >
            <StyledHeadline>
                <h2>{movie.title}</h2>
                <img src={movie.mainImg} alt="The Athlete"/>
            </StyledHeadline>
            <StyledAwards>
                {movie.awards.map((award) => (
                    <Award 
                        title={award.title} 
                        description={award.description} 
                        key={award.title}
                    />
                ))}
            </StyledAwards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt=""/>
            </ImageDisplay>
        </StyledDetails>
            )}
        </>
    );
};

const StyledDetails = styled(motion.div)`
    color: white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1150px){
        display: block;
        margin: 2rem 2rem;
    }
`;

const AwardStyled = styled.div`
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

const Award = ({title, description}) => {
    return (
        <AwardStyled>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyled>
    );
};

export default MovieDetail;