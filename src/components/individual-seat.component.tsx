'use client'

import { SeatStatusEnum } from "@/enums/seat-status.enum";
import { SeatModels } from "@/models/seat.models";
import Image from "next/image";
import { useAppDispatch, useAppSelector} from '@/state/typescript-hooks';
import { addSelectedSeat, changeSeatStatus, removeSelectedSeat } from "@/state/app.reducer";
import { SeatService } from "@/services/seat.service";

interface Props {
    params: SeatModels.IndividualSeat
}

const IndividualSeatComponent: React.FC<Props> = (props: Props) => {
    const dispatch =  useAppDispatch();
    const {selectedSeats} = useAppSelector(state => state.movieReducer);

    const handleSeatClick = () => {

        if(props.params.status === SeatStatusEnum.selected){
            const newSeat = {
                ...props.params,
                status: SeatStatusEnum.available,
            };
            dispatch(changeSeatStatus(newSeat));
            dispatch(removeSelectedSeat(newSeat));
            return
        }

        if(props.params.status === SeatStatusEnum.available){
            const newSeat = {
                ...props.params,
                status: SeatStatusEnum.selected,
            };
            dispatch(changeSeatStatus(newSeat));
            dispatch(addSelectedSeat(newSeat));
            return
        }
        
    }

    return (
        <button 
            className="individual-seat" 
            onClick={handleSeatClick} 
            disabled={SeatService.isDisabled(props.params.status, selectedSeats.length)}
        >
            {
                props.params.status === SeatStatusEnum.available && <Image
                    className="individual-seat__seat-img"
                    src="/assets/available-seat.png"   
                    alt="seat image"
                    width={97}
                    height={67}
                    priority={true}
                />
            }
            {
                props.params.status === SeatStatusEnum.notAvailable && <Image
                    className="individual-seat__seat-img"
                    src="/assets/not-available-seat.png"   
                    alt="seat image"
                    width={97}
                    height={67}
                    priority={true}
                />
            }
            {
                props.params.status === SeatStatusEnum.selected && <Image
                    className="individual-seat__seat-img"
                    src="/assets/selected-seat.png"   
                    alt="seat image"
                    width={97}
                    height={67}
                    priority={true}
                />
            }
        </button>
    )
}

export default IndividualSeatComponent;