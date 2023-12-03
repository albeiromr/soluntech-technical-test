'use client'

import { useAppSelector } from "@/state/typescript-hooks"

export default function CheckoutPage() {
  const {
    selectedMovie,
    selectedSeats,
    selectedDate,
    selectedHour,
    totalPrice,
  } = useAppSelector(state => state.movieReducer);

  return (
    <section className="page">

      <p>movie: {selectedMovie.title}</p>
      <hr />

      <p>seats:</p>
        {selectedSeats.map(seat => <p>{`${seat.row}${seat.position}`}</p>)}
      <hr />

      <p>Date: {`${selectedDate.weekDay} - ${selectedDate.monthDay}`}</p>
      <hr />

      <p>hour: {selectedHour.hour}</p>
      <hr />

      <p>total price ${totalPrice} </p>
      <hr />

    </section>
  )
}
