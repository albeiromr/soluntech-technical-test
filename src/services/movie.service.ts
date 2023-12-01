import { MovieModels } from "@/models/movie-models";

export class MovieService {
  /**
   * Brings all the raw movie data from the backend service and return a clean dataset
   */
  public static async fetchMoviesFromService(): Promise<MovieModels.CleanMovie[]> {
    try {
        const fetchedData = await fetch(process.env.MOVIE_SERVICE_URL!, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.MOVIE_SERVICE_APIKEY!,
            "X-RapidAPI-Host": process.env.MOVIE_SERVICE_HOST!,
          },
        });

        if (fetchedData.status !== 200) throw new Error("There was an error when consulting the movie service");

        const parsedData: MovieModels.RawServiceResponse = await fetchedData.json();
        return MovieService.ExtractCleanData(parsedData.results);
    } catch (error) {
        throw error;
    }
  }

  /**
   * Receives a set o raw movies and transform them into  clean ones
   */
  private static ExtractCleanData(rawMovies: MovieModels.RawMovie[]): MovieModels.CleanMovie[]{
    const cleanData = rawMovies.map(movie => {
        const cleanMovie: MovieModels.CleanMovie = {
            id: movie.id,
        }
        return cleanMovie
    })
    return cleanData;
  }
}
