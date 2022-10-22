import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import {Container} from './style';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieCard = ({movie, showLink = true}) => {
    return(
        <Container>
            <img src={imageUrl + movie.poster_path} alt={movie.title}/>
                    
            <h2>{movie.title}</h2>
            <p><FaStar/> {movie.vote_average}</p>
            {showLink&& 
                <Link to={`/movie/${movie.id}`} >Detalhes</Link>
            }
        </Container>
    );
} 