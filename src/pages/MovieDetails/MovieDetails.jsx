import { Outlet, useParams, Link } from "react-router-dom";
import * as API from '../../services/Api';
import { useState, useEffect } from "react";
import { IMAGE_BASE_API_URL, FALLBACK_IMAGE_URL } from "constants";
import { AdditionalInfo, Container, GoBackBtn, List } from "./MovieDetails.styled";
import { MovieCard } from "components/MovieCard/Moviecard";

const navItem = [
    { href: 'cast', label: 'Cast' },
    { href: 'reviews', label: 'Reviews' },
    
]

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();   // from <Route path="movies/:movieId" element={<MovieDetails />}>

    useEffect(() => {
      
        getMovieById();

        async function getMovieById(){
          
            const fetchMovie = await API.getMovieById(movieId);
            const { genres, original_title, overview, poster_path, vote_average, release_date
            } = fetchMovie;
            console.log('fetchMovie', fetchMovie);
            
            setMovie({
                title: original_title,
                genres: genres.map(genre => genre.name).join(', '),
                overview,
                poster_path: poster_path ? IMAGE_BASE_API_URL + poster_path : FALLBACK_IMAGE_URL,
                rating: Math.round(vote_average * 10),
                year: release_date.slice(0, 4),
            });
             
        }
        
    
    }, [movieId])
    
    if (!movie) return null;

    const { title, genres, overview, poster_path, rating, year } = movie;

    return (
        <Container>
            <GoBackBtn to="">Go back</GoBackBtn>
            <MovieCard rating={rating} image={poster_path} title={title} genres={genres} overview={overview} year={year} />
            <AdditionalInfo>
                <h2>Additional inormation</h2>
                <List>
                    {navItem.map(({ href, label }) => (
                        <li key={href}>
                            <Link to={href}>{label}</Link>
                        </li>
                    ))}
                </List>
                <Outlet/>
            
            </AdditionalInfo>
        </Container>
    )
}


