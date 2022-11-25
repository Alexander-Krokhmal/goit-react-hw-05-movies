import { useParams } from "react-router-dom";
import * as API from '../../services/Api';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();   // from <Route path="movies/:movieId" element={<MovieDetails />}>

    useEffect(() => {
      
        getMovieById();

        async function getMovieById(movieId){
          
                const fetchMovie = await API.getMovieById(movieId);
            console.log(fetchMovie);
            
                setMovie({fetchMovie});
             
        }
        
    
    }, [movieId])
    
    if (!movie) return null;
    console.log(movie);



    return (
        <main>
            <button type="button">Go back</button>
            {/* <div>
                <img src="https://via.placeholder.com/960x240" alt="" />
                <div>
                    <h2>
                        Name - {movie.name} - {movieId}
                    </h2>
                    <p>User score: 74%</p>
                    
                    <h3>
                        Overwiev - {movie.overwiev}
                    </h3>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                    sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
                    a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
                    atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
                    praesentium ipsum quos unde voluptatum?
                    </p>
                    
                    <h3>
                        Genres - {movie.genres}
                    </h3>
                    <p>
                        Lorem ipsum dolor!
                    </p>
                </div>
            </div> */}
                {/* <div>
                    <h3>
                        Additional inormation
                    </h3>
                    <Link to={ <div> Cast</div>} />
                    <Link to={ <div> Review</div>} />
                </div> */}
        </main>
    )
}