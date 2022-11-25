import { Link } from "react-router-dom";
import { MovieCardItemStyled, MovieListStyled } from "./MovieList.styled";

export const MovieList = ({ movies }) => {
    const IMAGE_BASE_API_URL = `https://image.tmdb.org/t/p/w500`;
    const FALLBACK_IMAGE_URL = `https://i.postimg.cc/htSNfpBY/movie-card-plug.jpg`;
    
    return (
    <MovieListStyled>
        {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <Link to={`${id}`}>

                        <MovieCardItemStyled>
                            <img src={poster_path? IMAGE_BASE_API_URL + poster_path : FALLBACK_IMAGE_URL} alt={title} width="200px" height="300px"/>
                            <h3>{ title }</h3>
                        </MovieCardItemStyled>
                    </Link>
                </li>
            ))}
    </MovieListStyled>
)}