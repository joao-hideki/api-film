import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa';
import {Container} from './style';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieCard = ({movie, showLink = true}) => {
    return(
        <Container>
            <img src={imageUrl + movie.poster_path} alt={movie.title}/>
                    
            <h2>{movie.title}</h2>
            <div><FaStar/>  {movie.vote_average}</div>
            {showLink&& 
                <Link to={`/movie/${movie.id}`}>
                    <button onClick={() => {
                         window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })
                    }}> Detalhes </button>
                </Link>
            }
        </Container>
    );
} 