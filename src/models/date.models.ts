import { DateStatusEnum } from "@/enums/date-status.enum";

export namespace DateModels {
  /**
   * Represents the data struture for an individual date
   */
  export interface IndividualDate {
    position: number;
    status: DateStatusEnum;
    date: string;
    weekDay: string;
    monthDay: number;
  }
}
