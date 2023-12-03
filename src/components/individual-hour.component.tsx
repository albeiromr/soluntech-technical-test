'use client'

import { HourStatusEnum } from "@/enums/hour-status.enum";
import { HourModels } from "@/models/hour.models"
import { changeHourStatus, setSelectedHour } from "@/state/app.reducer";
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';

interface Props {
    params: HourModels.IndividualHour;
}

const IndividualHourComponent: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        const newHour ={
            ...props.params,
            status: HourStatusEnum.selected,
        };
        dispatch(changeHourStatus(newHour));
        dispatch(setSelectedHour(newHour));
    }

    return (
        <button 
            onClick={handleClick}
            className={props.params.status === HourStatusEnum.selected ? "individual-hour--selected" : "individual-hour" }
        >
            <p>{props.params.hour}</p>
        </button>
    )
}

export default IndividualHourComponent;