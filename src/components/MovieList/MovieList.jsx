import { FALLBACK_IMAGE_URL, IMAGE_BASE_API_URL } from "constants";
import { Link } from "react-router-dom";
import { MovieCardItemStyled, MovieListStyled } from "./MovieList.styled";

export const MovieList = ({ movies }) => {

    return (
    <MovieListStyled>
        {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <Link to={`movies/${id}`}>

                        <MovieCardItemStyled>
                            <img src={poster_path? IMAGE_BASE_API_URL + poster_path : FALLBACK_IMAGE_URL} alt={title} width="200px" height="300px"/>
                            <h3>{ title }</h3>
                        </MovieCardItemStyled>
                    </Link>
                </li>
            ))}
    </MovieListStyled>
)}