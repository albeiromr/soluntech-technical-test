import ConfirmSeatComponent from "@/components/confirm-seat.component";
import DatesComponent from "@/components/dates.component";
import HoursComponent from "@/components/hours.component";
import SeatsComponent from "@/components/seats.component";
import Image from "next/image";

const SelectSeatPage = () => {
  return (
    <section className="page">
      <div className="page__display-container">
        <Image
            src="/static/pantalla.png"   
            alt="screen image"
            width={365}
            height={50}
            priority={true}
          />
      </div>

      <SeatsComponent />
      
      <div className="page__seats-explanation">

        <span>
          <Image
            src="/static/selected-seat.png"   
            alt="seat image"
            width={97}
            height={67}
            priority={true}
          />
          <p>Selected</p>
        </span>

        <span>
          <Image
            src="/static/not-available-seat.png"   
            alt="seat image"
            width={97}
            height={67}
            priority={true}
          />
          <p>Booked</p>
        </span>

        <span>
          <Image
            src="/static/available-seat.png"   
            alt="seat image"
            width={97}
            height={67}
            priority={true}
          />
          <p>Available</p>
        </span>

      </div>

      <div className="page__datetime-container">
        <h2>Select date and time</h2>

        <DatesComponent />
        <HoursComponent />
        <ConfirmSeatComponent />
        
      </div>
    </section>
  )
}

export default SelectSeatPage;
