import { HourStatusEnum } from "@/enums/hour-status.enum";

export namespace HourModels {
  /**
   * Represents the data struture for an individual hour
   */
  export interface IndividualHour {
    position: number;
    status: HourStatusEnum;
    hour: string;
  }
}
