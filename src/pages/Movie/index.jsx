import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {Container, Info} from './style';
import { MovieCard } from '../../components/MovieCard';
import {LoadingEffect} from '../../components/LoadingEffect/index';

const apiKey = 'api_key=a77a85e3927dc21aabb70ece83703552';
const moviesURL = 'https://api.themoviedb.org/3/movie/';

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    

    const getMovie = async(url) => {
        let response = await fetch(url);
        let json = await response.json();
        setMovie(json);    
    } 

    useEffect (() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieUrl);
    }, []);

    const formatCurrency = (number) => {
        return number.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    return(
        <Container>
            {!movie &&
                <LoadingEffect/>
            }
            {movie && 
                <>
                    <MovieCard movie={movie} showLink={false}/>
                    <Info>
                        <p>{movie.tagline}</p>
                        <div>
                            <h3><BsWallet2/> Orçamento:</h3>
                            <p>{formatCurrency(movie.budget)}</p>                        
                        </div>
                        <div>
                            <h3><BsGraphUp/> Receita:</h3>
                            <p>{formatCurrency(movie.revenue)}</p>                        
                        </div>
                        <div>
                            <h3><BsHourglassSplit/> Duração:</h3>
                            <p>{movie.runtime} minutos</p>                        
                        </div>
                        <div>
                            <h3><BsFillFileEarmarkTextFill/> Descrição:</h3>
                            <p>{movie.overview}</p>                        
                        </div>
                    </Info>
                
                </>
            }
        </Container>
    )
}