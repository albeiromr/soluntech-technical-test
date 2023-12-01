import { MovieService } from "@/services/movie.service"

export default async function HomePage() {
  const movies = await MovieService.fetchMoviesFromService();
  return (
    <main className="page">
      <p>home page</p>
      {
        movies.map(movie => <p>{movie.id}</p>)
      }
    </main>
  )
}
