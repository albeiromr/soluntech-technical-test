import { SeatModels } from "@/models/seat.models"

export interface AppReducerModel {
    seats: {
        a: SeatModels.IndividualSeat[]
        b: SeatModels.IndividualSeat[]
        c: SeatModels.IndividualSeat[]
        d: SeatModels.IndividualSeat[]
        e: SeatModels.IndividualSeat[]
        f: SeatModels.IndividualSeat[]
        g: SeatModels.IndividualSeat[]
    }
    selectedSeats: SeatModels.IndividualSeat[]
}