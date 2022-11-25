import * as API from '../../services/Api';
import { useEffect, useState } from 'react';
import { Container } from './Home.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();

        async function getPopularMovies() {
            try {
                const results = await API.getTrendingMovies();
        
                setMovies([...results]);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, []);

    
    return (
        <Container>
            <h2>Trending today</h2>
            
            <MovieList movies={movies}/>
        </Container>
    )
};

export default Home;