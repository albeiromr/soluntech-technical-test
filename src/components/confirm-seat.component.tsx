'use client'
import { setTotalPrice } from '@/state/app.reducer';
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ConfirmSeatComponent = () => {
    const {selectedSeats, totalPrice} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(setTotalPrice());
    }, [selectedSeats]);

    const handleClick = () => {
        router.push("/checkout");
    }

    return(
        <div className="confirm-seat">

            <div className="confirm-seat__price-container">
                <h3>Total Price</h3>
                <p>${totalPrice}</p>
            </div>

            <button 
                onClick={handleClick} 
                className="filled-button"
                disabled={totalPrice <= 0}
            >
                Confirm Seat
            </button>

        </div>
    )
}

export default ConfirmSeatComponent;