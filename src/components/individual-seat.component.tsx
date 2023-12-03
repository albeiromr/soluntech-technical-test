'use client'

import { SeatStatusEnum } from "@/enums/seat-status.enum";
import { SeatModels } from "@/models/seat.models";
import Image from "next/image";
import { useAppDispatch} from '@/state/typescript-hooks';
import { addSelectedSeat, changeSeatStatus, removeSelectedSeat } from "@/state/app.reducer";

interface Props {
    params: SeatModels.IndividualSeat
}

const IndividualSeatComponent: React.FC<Props> = (props: Props) => {
    const dispatch =  useAppDispatch();

    const handleSeatClick = () => {

        if(props.params.status === SeatStatusEnum.selected){
            dispatch(changeSeatStatus({
                ...props.params,
                status: SeatStatusEnum.available,
            }));
            dispatch(removeSelectedSeat(props.params));
            return
        }

        if(props.params.status === SeatStatusEnum.available){
            dispatch(changeSeatStatus({
                ...props.params,
                status: SeatStatusEnum.selected,
            }));
            dispatch(addSelectedSeat(props.params));
            return
        }
        
    }

    return (
        <button 
        className="individual-seat" 
        onClick={handleSeatClick} 
        disabled={props.params.status === SeatStatusEnum.notAvailable}
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