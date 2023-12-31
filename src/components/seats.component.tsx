'use client'

import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import IndividualSeatComponent from './individual-seat.component';

const SeatsComponent = () => {
    const {seats} = useAppSelector(state => state.movieReducer);

    return(
        <div className="seats">
            <div className="seats__incomplete-row">
                {seats.a.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>

            <div className="seats__complete-row">
                {seats.b.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>

            <div className="seats__complete-row">
                {seats.c.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>

            <div className="seats__complete-row">
                {seats.d.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>

            <div className="seats__complete-row">
                {seats.e.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>

            <div className="seats__complete-row">
                {seats.f.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>

            <div className="seats__incomplete-row">
                {seats.g.map(seat => <IndividualSeatComponent params={seat} key={`${seat.row}${seat.position}`}/>)}
            </div>
        </div>
    )
}

export default SeatsComponent;