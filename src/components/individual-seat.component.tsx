'use client'

import { SeatStatusEnum } from "@/enums/seat-status.enum";
import { SeatModels } from "@/models/seat.models";
import Image from "next/image";

interface Props {
    params: SeatModels.IndividualSeat
}

const IndividualSeatComponent: React.FC<Props> = (props: Props) => {
    return (
        <button className="individual-seat">
            {
                props.params.status === SeatStatusEnum.available && <Image
                className="individual-seat_seat-img"
                src="/assets/available-seat.png"   
                alt="seat image"
                priority
                />
            }
            {
                props.params.status === SeatStatusEnum.notAvailable && <Image
                className="individual-seat_seat-img"
                src="/assets/not-available-seat.png"   
                alt="seat image"
                priority
                />
            }
            {
                props.params.status === SeatStatusEnum.selected && <Image
                className="individual-seat_seat-img"
                src="/assets/selected-seat.png"   
                alt="seat image"
                priority
                />
            }
        </button>
    )
}

export default IndividualSeatComponent;