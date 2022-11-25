import { Genres, ImageWrapper, MovieCardStyled, Overview, Rating } from "./MovieCard.styled"

export const MovieCard = ({title, genres, overview, image, rating, year}) => {
    return (
        <MovieCardStyled>
            <ImageWrapper>
                <img src={image} alt={title} width="200px" height="300px"/>
            </ImageWrapper>
        
            <div>
                <h2>{title} ({year})</h2>
                <Rating>User score: {rating}%</Rating>
                
                <Overview>
                    <h3>Overwiev</h3>
                    <p>{overview}</p>
                </Overview>
                <Genres>
                    <h3>Genres</h3>
                    <p>{genres}</p>
                </Genres>
            </div>
    </MovieCardStyled>
    )
}