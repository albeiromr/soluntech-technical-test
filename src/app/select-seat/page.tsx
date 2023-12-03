import SeatsComponent from "@/components/seats.component";
import Image from "next/image";

export default function SelectSeatPage() {
  return (
    <section className="page">
      <div className="page__display-container">
        <img src="/assets/pantalla.png" alt="cinema display image" />
      </div>

      <SeatsComponent />
      
      <div className="page__seats-explanation">

        <span>
          <Image
            src="/assets/selected-seat.png"   
            alt="seat image"
            width={97}
            height={67}
            priority={true}
          />
          <p>Selected</p>
        </span>

        <span>
          <Image
            src="/assets/not-available-seat.png"   
            alt="seat image"
            width={97}
            height={67}
            priority={true}
          />
          <p>Booked</p>
        </span>

        <span>
          <Image
            src="/assets/available-seat.png"   
            alt="seat image"
            width={97}
            height={67}
            priority={true}
          />
          <p>Available</p>
        </span>

      </div>
    </section>
  )
}
