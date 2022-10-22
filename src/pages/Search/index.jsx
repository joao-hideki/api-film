import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard/index";
import { Container, Grid } from "./style";


const apiKey = 'api_key=a77a85e3927dc21aabb70ece83703552';
const searchUrl = 'https://api.themoviedb.org/3/search/movie';

const Search = () => {
    const [searchParams] = useSearchParams();
    const[movies, setMovies] = useState([]);
    const query = searchParams.get("q");
    
    const getSearchedMovies = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.results); 
     }
 
     useEffect(() => {
         const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
         getSearchedMovies(searchWithQueryUrl);
     }, [query])


    return(
        <Container>
            <p>Resultados para: <span>{query}</span></p>
            <Grid>
                {(movies.length == 0) &&
                    <p>Carregando...</p>
                }
                {(movies.length > 0) &&
                        movies.map((item) => {
                            return(
                                <MovieCard key={item.id} movie={item}/>
                            );                        
                        })           
                }
            </Grid>
        </Container>
    );
}

export default Search;