import { SeatStatusEnum } from "@/enums/seat-status.enum";
import { AppReducerModel } from "@/models/app-reducer.model";
import { SeatModels } from "@/models/seat.models";


export class StateService{

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

}