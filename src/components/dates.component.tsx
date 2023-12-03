'use client'

import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import IndividualDate from './individual-date.component';

const DatesComponent = () => {
    const {dates} = useAppSelector(state => state.appReducer);

    return(
        <div className="dates">
            { dates.map(date => <IndividualDate params={date} key={date.date}/>) }
        </div>
    )
}

export default DatesComponent;