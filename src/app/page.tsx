import MovieCardComponent from "@/components/movie-card.component";
import { MovieService } from "@/services/movie.service"

const LatestMoviesPage = async () => {
  const movies = await MovieService.fetchMoviesFromService();

  return (
    <main className="page">
      <div className="page__movie-grid">

        {
          movies.map(movie => <MovieCardComponent 
            key={movie.id}
            id={movie.id}
            img={movie.img}
            title={movie.title}
            type={movie.type}
          />)
        }
        
      </div>
    </main>
  )
}

export default LatestMoviesPage;
