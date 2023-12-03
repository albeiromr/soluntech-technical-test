'use client'

import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import IndividualDateComponent from './individual-date.component';

const DatesComponent = () => {
    const {dates} = useAppSelector(state => state.movieReducer);

    return(
        <div className="dates">
            { dates.map(date => <IndividualDateComponent params={date} key={date.date}/>) }
        </div>
    )
}

export default DatesComponent;