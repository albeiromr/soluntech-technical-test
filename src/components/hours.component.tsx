'use client'

import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import IndividualHourComponent from './individual-hour.component';

const HoursComponent = () => {
    const {hours} = useAppSelector(state => state.movieReducer);

    return(
        <div className="hours">
            { hours.map(hour => <IndividualHourComponent params={hour} key={hour.hour}/>) }
        </div>
    )
}

export default HoursComponent;