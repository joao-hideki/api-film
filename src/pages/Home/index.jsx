import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Container, Grid } from "./style";


const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=a77a85e3927dc21aabb70ece83703552';

const Home = () => { 
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async(url) => {
       const response = await fetch(url);
       const json = await response.json();
       setTopMovies(json.results); 
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, [])

    return(
        <Container>
            <p>Melhores Filmes:</p>
            <Grid>
                {(topMovies.length == 0) &&
                    <p>Carregando...</p>
                }
                {(topMovies.length > 0) &&
                        topMovies.map((item) => {
                            return(
                                <MovieCard key={item.id} movie={item}/>
                            );                        
                        })           
                }
            </Grid>
        </Container>
    );
}

export default Home;

