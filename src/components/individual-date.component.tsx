'use client'

import { DateStatusEnum } from "@/enums/date-status.enum";
import { DateModels } from "@/models/date.models";
import { changeDateStatus, cleanSelectedSeats, createHoursTemplate, createSeatsTemplate, setSelectedDate } from "@/state/app.reducer";
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { useEffect } from "react";

interface Props {
    params: DateModels.IndividualDate;
}

const IndividualDateComponent: React.FC<Props> = (props: Props) => {
    const {dates} = useAppSelector(state => state.appReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(props.params.status === DateStatusEnum.selected) dispatch(setSelectedDate(props.params));
    }, [dates])

    const handleClick = () => {
        const newDate = {
            ...props.params,
            status: DateStatusEnum.selected,
        };
        dispatch(changeDateStatus(newDate));
        dispatch(setSelectedDate(newDate));
        dispatch(cleanSelectedSeats());
        dispatch(createSeatsTemplate());
        dispatch(createHoursTemplate());
    }

    return (
        <button 
            onClick={handleClick}
            className={props.params.status === DateStatusEnum.selected ? "individual-date--selected" : "individual-date"}
            disabled={props.params.status === DateStatusEnum.selected}
        >
            <h3>{props.params.weekDay}</h3>
            <p>{props.params.monthDay}</p>
        </button>
    )
}

export default IndividualDateComponent;