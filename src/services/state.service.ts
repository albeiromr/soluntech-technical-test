import { DateStatusEnum } from "@/enums/date-status.enum";
import { SeatStatusEnum } from "@/enums/seat-status.enum";
import { AppReducerModel } from "@/models/app-reducer.model";
import { DateModels } from "@/models/date.models";
import { SeatModels } from "@/models/seat.models";


export class StateService{
    /**
     * Generates the data set for the app seats
     */
    public static generateSeatsTemplate(): AppReducerModel["seats"] {
        const seatTemplate: AppReducerModel["seats"] = {
            a: [] as SeatModels.IndividualSeat[],
            b: [] as SeatModels.IndividualSeat[],
            c: [] as SeatModels.IndividualSeat[],
            d: [] as SeatModels.IndividualSeat[],
            e: [] as SeatModels.IndividualSeat[],
            f: [] as SeatModels.IndividualSeat[],
            g: [] as SeatModels.IndividualSeat[],
        }

        // row A
        const rowAlimit: number = 7;
        const rowATakenSeat: number = Math.floor(Math.random() * (rowAlimit - 1)) + 1;
        for(let i = 1; i < rowAlimit; i++){
            if(i === rowATakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "a",
                    position: i
                }
                seatTemplate.a.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "a",
                position: i
            }
            seatTemplate.a.push(seat);
        }

        // row B
        const rowBlimit: number = 9;
        const rowBTakenSeat: number = Math.floor(Math.random() * (rowBlimit - 1)) + 1;
        for(let i = 1; i < rowBlimit; i++){
            if(i === rowBTakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "b",
                    position: i
                }
                seatTemplate.b.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "b",
                position: i
            }
            seatTemplate.b.push(seat);
        }

        // row C
        const rowClimit: number = 9;
        const rowCTakenSeat: number = Math.floor(Math.random() * (rowClimit - 1)) + 1;
        for(let i = 1; i < rowClimit; i++){
            if(i === rowCTakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "c",
                    position: i
                }
                seatTemplate.c.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "c",
                position: i
            }
            seatTemplate.c.push(seat);
        }

        // row D
        const rowDlimit: number = 9;
        const rowDTakenSeat: number = Math.floor(Math.random() * (rowDlimit - 1)) + 1;
        for(let i = 1; i < rowDlimit; i++){
            if(i === rowDTakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "d",
                    position: i
                }
                seatTemplate.d.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "d",
                position: i
            }
            seatTemplate.d.push(seat);
        }

        // row E
        const rowElimit: number = 9;
        const rowETakenSeat: number = Math.floor(Math.random() * (rowElimit - 1)) + 1;
        for(let i = 1; i < rowElimit; i++){
            if(i === rowETakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "e",
                    position: i
                }
                seatTemplate.e.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "e",
                position: i
            }
            seatTemplate.e.push(seat);
        }

        // row F
        const rowFlimit: number = 9;
        const rowFTakenSeat: number = Math.floor(Math.random() * (rowFlimit - 1)) + 1;
        for(let i = 1; i < rowFlimit; i++){
            if(i === rowFTakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "f",
                    position: i
                }
                seatTemplate.f.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "f",
                position: i
            }
            seatTemplate.f.push(seat);
        }

        // row G
        const rowGlimit: number = 7;
        const rowGTakenSeat: number = Math.floor(Math.random() * (rowGlimit - 1)) + 1;
        for(let i = 1; i < rowGlimit; i++){
            if(i === rowGTakenSeat){
                let seat: SeatModels.IndividualSeat = {
                    status: SeatStatusEnum.notAvailable,
                    row: "g",
                    position: i
                }
                seatTemplate.g.push(seat);
                continue;
            }

            let seat: SeatModels.IndividualSeat = {
                status: SeatStatusEnum.available,
                row: "g",
                position: i
            }
            seatTemplate.g.push(seat);
        }

        return seatTemplate;
    }

    /**
     * Returns five dates starting from today
     */
    private static getNextFiveDates(): Date[] {
        const today = new Date();
        const nextFiveDates: Date[] = [];

        for (let i = 0; i < 5; i++) {
            const nextDate = new Date(today);
            //add 1 to get tomorrow's date, 2 for the day after tomorrow, and so on
            nextDate.setDate(today.getDate() + i + 1); 

            // If the resulting date is in the next month, adjust the month and year
            if (nextDate.getMonth() !== today.getMonth()) {
            nextDate.setMonth(today.getMonth());
            nextDate.setFullYear(today.getFullYear());
            }

            nextFiveDates.push(nextDate);
        }

        return nextFiveDates;
    }

    /**
     * Generates the data set for the app dates
     */
    public static generateDatesTemplate(): DateModels.IndividualDate[] {
        const dates = this.getNextFiveDates();
        const parseDates = dates.map((date, index) => ({
            position: index,
            status: index === 1 ? DateStatusEnum.selected : DateStatusEnum.notSelected,
            date: date.toISOString(),
            weekDay: date.toLocaleDateString('en-US', { weekday: 'short' }),
            monthDay: date.getDate(),
        }));
        return parseDates;
    }

}