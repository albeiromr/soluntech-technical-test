'use client'

import { useRouter } from "next/navigation"
import { useAppDispatch, useAppSelector } from '@/state/typescript-hooks';
import { createSeatsTemplate } from "@/state/app.reducer";

interface Props {
    id: string;
}

const SelectSeatButtonComponent: React.FC<Props> = ({id}) => {
    const router = useRouter();
    const dispatch =  useAppDispatch();

    const handleClick = () => {
        dispatch(createSeatsTemplate())
        router.push("/select-seat")
    }
    return <button className="filled-button" onClick={handleClick}>Select Seat</button>
}

export default SelectSeatButtonComponent;