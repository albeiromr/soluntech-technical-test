import { MovieModels } from "@/models/movie-models";
import Image from "next/image";

interface props {
  id: string;
  img: MovieModels.CleanMovie["img"];
  title: string;
  type: string;
}

const MovieCardComponent: React.FC<props> = ({ id, img, title, type }) => {
  return (
    <article className="movie-card">
      <div className="movie-card__img-container">
        <Image
            className="movie-card__img"
            src={img.url}
            alt="movie poster"
            fill
            priority
          />
      </div>
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__type">{type}</p>
    </article>
  );
};

export default MovieCardComponent;
