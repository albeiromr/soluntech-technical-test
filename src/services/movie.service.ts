import { MovieModels } from "@/models/movie-models";

export class MovieService {
  /**
   * Brings all the raw movie data from the backend service and return a clean dataset
   */
  public static async fetchMoviesFromService(): Promise<MovieModels.CleanMovie[]> {
    const endpointParámeters: string = "/titles/x/upcoming?year=2023&limit=40&info=mini_info"
    try {
        const fetchedData = await fetch(`${process.env.MOVIE_SERVICE_URL!}${endpointParámeters}`, {
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
    const newStructureArray = rawMovies.map(movie => {
        const cleanMovie: MovieModels.CleanMovie = {
            id: movie.id,
            img: movie.primaryImage,
            title: movie.titleText.text,
            type: movie.titleType.text,
        }

        if( 
          cleanMovie.img.width < 500 ||
          cleanMovie.img.width > 1800 ||
          !cleanMovie.img.url
        ) return {} as MovieModels.CleanMovie;
        else return cleanMovie;
    })
    const cleanData = newStructureArray.filter(movie => movie.id !== undefined);
    return cleanData;
  }
}
