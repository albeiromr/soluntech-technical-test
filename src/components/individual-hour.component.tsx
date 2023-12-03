'use client'

import { HourStatusEnum } from "@/enums/hour-status.enum";
import { HourModels } from "@/models/hour.models"

interface Props {
    params: HourModels.IndividualHour;
}

const IndividualHourComponent: React.FC<Props> = (props: Props) => {
    return (
        <button 
            className={props.params.status === HourStatusEnum.selected ? "individual-hour--selected" : "individual-hour" }
        >
            <p>{props.params.hour}</p>
        </button>
    )
}

export default IndividualHourComponent;