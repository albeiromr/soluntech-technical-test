'use client'

import { useRouter } from "next/navigation"

interface Props {
    id: string;
}

const SelectSeatButtonComponent: React.FC<Props> = ({id}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/select-seat")
    }
    return <button className="filled-button" onClick={handleClick}>Select Seat</button>
}

export default SelectSeatButtonComponent;