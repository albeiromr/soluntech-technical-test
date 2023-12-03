'use client'

import { HourStatusEnum } from "@/enums/hour-status.enum";
import { HourModels } from "@/models/hour.models"
import { changeHourStatus, cleanSelectedSeats, createDatesTemplate, createSeatsTemplate, setSelectedHour } from "@/state/app.reducer";
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { useEffect } from "react";

interface Props {
    params: HourModels.IndividualHour;
}

const IndividualHourComponent: React.FC<Props> = (props: Props) => {
    const {hours} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(props.params.status === HourStatusEnum.selected) dispatch(setSelectedHour(props.params));
    }, [hours]);

    const handleClick = () => {
        const newHour ={
            ...props.params,
            status: HourStatusEnum.selected,
        };
        dispatch(changeHourStatus(newHour));
        dispatch(setSelectedHour(newHour));
        dispatch(cleanSelectedSeats());
        dispatch(createSeatsTemplate());
        dispatch(createDatesTemplate());
    }

    return (
        <button 
            onClick={handleClick}
            className={props.params.status === HourStatusEnum.selected ? "individual-hour--selected" : "individual-hour" }
            disabled={props.params.status === HourStatusEnum.selected}
        >
            <p>{props.params.hour}</p>
        </button>
    )
}

export default IndividualHourComponent;