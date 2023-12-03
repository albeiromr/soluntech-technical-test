import SelectSeatButtonComponent from "@/components/select-seat-button.component";
import { MovieModels } from "@/models/movie-models";
import { MovieService } from "@/services/movie.service"
import Image from "next/image";

interface Props {
  params: {
    id: string;
  }
}

export async function generateStaticParams(): Promise<MovieModels.CleanMovie[]> {
  return MovieService.fetchMoviesFromService();
}

const MovieDetailsPage = async (props: Props) => {
  const movie: MovieModels.CleanMovie = await MovieService.fetchIndividualMovie(props.params.id);

  return (
    <section className="page">
      <div className="page__movie-hero">

        <div className="page__hero-image-container">
          <Image
              className="page__hero-img"
              src={movie.img.url}
              alt="movie poster"
              fill
              priority={true}
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 15vw"
            />
        </div>

        <div className="page__hero-info-container">

          <div className="page__hero-info-box">
            <img src="/assets/video-camera.svg" alt="camera icon" />
            <h3>Type</h3>
            <p>{movie.category}</p>
          </div>

          <div className="page__hero-info-box">
            <img src="/assets/clock.svg" alt="clock icon" />
            <h3>Duration</h3>
            <p>2h 30m</p>
          </div>

          <div className="page__hero-info-box">
            <img src="/assets/star.svg" alt="star icon" />
            <h3>Rating</h3>
            <p>9.0/10</p>
          </div>

        </div>
      </div>

      <h2 className="page__movie-title">{movie.title}</h2>
      <p className="page__movie-type">{movie.type}</p>

      <h2 className="page__movie-title">Description</h2>
      <p className="page__movie-description">
        Cras hendrerit non quam a congue. Vivamus luctus
        lorem et ante vehicula dictum. Etiam laoreet dictum
        suscipit. Cras vitae dapibus nisi. Aenean ligula orci,
        interdum sit amet tincidunt sed, fringilla vitae magna.
        Curabitur eu malesuada elit.
      </p>

      <SelectSeatButtonComponent />

    </section>
  )
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export default MovieDetailsPage;

