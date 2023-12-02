import { MovieModels } from "@/models/movie-models";
import Image from "next/image";

interface props {
  id: string;
  img: MovieModels.CleanMovie["img"];
}

const MovieCardComponent: React.FC<props> = ({ id, img }) => {
  return (
    <article className="movie-card">
      <div className="movie-card__img-container">
        <Image
            className="movie-card__img"
            src={img.url}
            alt="movie poster"
            fill
          />
      </div>
    </article>
  );
};

export default MovieCardComponent;
