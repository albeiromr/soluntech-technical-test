'use client'

import { DateStatusEnum } from "@/enums/date-status.enum";
import { DateModels } from "@/models/date.models";
import { changeDateStatus, setSelectedDate } from "@/state/app.reducer";
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';

interface Props {
    params: DateModels.IndividualDate;
}

const IndividualDateComponent: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        const newDate = {
            ...props.params,
            status: DateStatusEnum.selected,
        };
        dispatch(changeDateStatus(newDate));
        dispatch(setSelectedDate(newDate));
    }

    return (
        <button 
            onClick={handleClick}
            className={props.params.status === DateStatusEnum.selected ? "individual-date--selected" : "individual-date"}
        >
            <h3>{props.params.weekDay}</h3>
            <p>{props.params.monthDay}</p>
        </button>
    )
}

export default IndividualDateComponent;