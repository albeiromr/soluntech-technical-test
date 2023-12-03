'use client'
import { setTotalPrice } from '@/state/app.reducer';
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { useEffect } from 'react';

const ConfirmSeatComponent = () => {
    const {selectedSeats, totalPrice} = useAppSelector(state => state.appReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTotalPrice());
    }, [selectedSeats]);

    return(
        <div className="confirm-seat">

            <div className="confirm-seat__price-container">
                <h3>Total Price</h3>
                <p>${totalPrice}</p>
            </div>

            <button className="filled-button">Confirm Seat</button>

        </div>
    )
}

export default ConfirmSeatComponent;