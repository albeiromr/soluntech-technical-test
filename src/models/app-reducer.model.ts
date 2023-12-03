import { SeatModels } from "@/models/seat.models"
import { DateModels } from "./date.models"
import { HourModels } from "./hour.models";

export interface AppReducerModel {
    seats: {
        a: SeatModels.IndividualSeat[];
        b: SeatModels.IndividualSeat[];
        c: SeatModels.IndividualSeat[];
        d: SeatModels.IndividualSeat[];
        e: SeatModels.IndividualSeat[];
        f: SeatModels.IndividualSeat[];
        g: SeatModels.IndividualSeat[];
    };
    selectedSeats: SeatModels.IndividualSeat[];
    dates: DateModels.IndividualDate[];
    selectedDate: DateModels.IndividualDate;
    hours: HourModels.IndividualHour[];
    selectedHour: HourModels.IndividualHour;
}