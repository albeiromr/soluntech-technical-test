'use client'

import { MovieModels } from "@/models/movie-models";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { createDatesTemplate, createHoursTemplate, createSeatsTemplate, setSelectedMovie } from "@/state/app.reducer";

interface Props {
  id: string;
  img: MovieModels.CleanMovie["img"];
  title: string;
  type: string;
}

const MovieCardComponent: React.FC<Props> = (props: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  

  const handleClick = () => {
    dispatch(setSelectedMovie(props))
    dispatch(createSeatsTemplate());
    dispatch(createDatesTemplate());
    dispatch(createHoursTemplate());

    router.push(`/movie-details/${props.id}`)
  }

  return (
    <article className="movie-card" onClick={handleClick}>
      <div className="movie-card__img-container">
        <Image
            className="movie-card__img"
            src={props.img.url}
            alt="movie poster"
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 15vw"
            priority={true}
          />
      </div>
      <h2 className="movie-card__title">{props.title}</h2>
      <p className="movie-card__type">{props.type}</p>
    </article>
  );
};

export default MovieCardComponent;
