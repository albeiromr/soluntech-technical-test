import { SeatStatusEnum } from "@/enums/seat-status.enum";

export class SeatService {
    /**
     * Returns a boolean to identify if a seat must be disabled or not
     */
    public static isDisabled(status: SeatStatusEnum, selectedSeatsAmount: number): boolean {
        if (status === SeatStatusEnum.notAvailable) return true;
        if (status === SeatStatusEnum.available && selectedSeatsAmount === 3) return true;
        return false;
    }
}