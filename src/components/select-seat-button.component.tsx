'use client'

import { useRouter } from "next/navigation"

const SelectSeatButtonComponent = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/select-seat");
    }

    return <button className="filled-button" onClick={handleClick}>Select Seat</button>
}

export default SelectSeatButtonComponent;