'use client'

import { MovieModels } from "@/models/movie-models";
import Image from "next/image";
import { useRouter } from 'next/navigation'

interface props {
  id: string;
  img: MovieModels.CleanMovie["img"];
  title: string;
  type: string;
}

const MovieCardComponent: React.FC<props> = ({ id, img, title, type }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/movie-details/${id}`)
  }

  return (
    <article className="movie-card" onClick={handleClick}>
      <div className="movie-card__img-container">
        <Image
            className="movie-card__img"
            src={img.url}
            alt="movie poster"
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 15vw"
            priority={true}
          />
      </div>
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__type">{type}</p>
    </article>
  );
};

export default MovieCardComponent;
