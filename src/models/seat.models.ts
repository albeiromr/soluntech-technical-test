import { SeatStatusEnum } from "@/enums/seat-status.enum";

export namespace SeatModels {
  /**
   * Represents the data structure for an individual seat
   */
  export interface IndividualSeat {
    status: SeatStatusEnum;
    row: string;
    position: number;
  }
}
