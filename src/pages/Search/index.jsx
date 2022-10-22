import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard/index";
import { Container, Grid } from "./style";
import {LoadingEffect} from '../../components/LoadingEffect/index';


const apiKey = 'api_key=a77a85e3927dc21aabb70ece83703552';
const searchUrl = 'https://api.themoviedb.org/3/search/movie';

const Search = () => {
    const [searchParams] = useSearchParams();
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(false);
    const query = searchParams.get("q");
    
    const getSearchedMovies = async (url) => {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setMovies(json.results); 
        setLoading(false);
     }
 
     useEffect(() => {
         const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
         getSearchedMovies(searchWithQueryUrl);
     }, [query])


    return(
        <Container>
            <p>Resultados para: <span>{query}</span></p>
            <Grid>
                {loading &&
                    <LoadingEffect/>
                }
                {!loading &&
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