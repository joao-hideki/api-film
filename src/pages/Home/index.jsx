import { useEffect, useState } from "react";
import { MovieCard } from "../../components/MovieCard";
import { Container, Grid } from "./style";
import { LoadingEffect } from "../../components/LoadingEffect/index";



const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'api_key=a77a85e3927dc21aabb70ece83703552';

const Home = () => { 
    const [topMovies, setTopMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTopRatedMovies = async(url) => { 
        setLoading(true);
       const response = await fetch(url);
       const json = await response.json();
       setTopMovies(json.results); 
       setLoading(false);
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, [])

    return(
        <Container>
            <p>Melhores Filmes:</p>
            <Grid>
                {loading &&
                    <LoadingEffect/>
                }
                {!loading &&
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

