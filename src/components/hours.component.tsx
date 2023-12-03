'use client'

import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import IndividualHour from './individual-hour.component';
import IndividualHourComponent from './individual-hour.component';

const HoursComponent = () => {
    const {hours} = useAppSelector(state => state.appReducer);

    return(
        <div className="hours">
            { hours.map(hour => <IndividualHourComponent params={hour} key={hour.hour}/>) }
        </div>
    )
}

export default HoursComponent;