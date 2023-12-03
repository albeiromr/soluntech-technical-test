import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppReducerModel } from "../models/app-reducer.model";
import { SeatModels } from "@/models/seat.models";
import { StateService } from "@/services/state.service";

const initialState: AppReducerModel = {
  seats: {
    a: [] as SeatModels.IndividualSeat[],
    b: [] as SeatModels.IndividualSeat[],
    c: [] as SeatModels.IndividualSeat[],
    d: [] as SeatModels.IndividualSeat[],
    e: [] as SeatModels.IndividualSeat[],
    f: [] as SeatModels.IndividualSeat[],
    g: [] as SeatModels.IndividualSeat[],
  },
  selectedSeats: [] as SeatModels.IndividualSeat[]
};

export const appReducer = createSlice({
  name: "app-reducer",
  initialState,
  reducers: {
    resetAppState: (state) => {
      state = initialState;
    },
    createSeatsTemplate: (state) => {
      state.seats = StateService.generateSeatsTemplate();
    },
    changeSeatStatus: (state, action: PayloadAction<SeatModels.IndividualSeat>) => {
      switch (action.payload.row) {
        case "a":
          state.seats.a[action.payload.position - 1] = action.payload;
          break;
        case "b":
          state.seats.b[action.payload.position - 1] = action.payload;
          break;
        case "c":
          state.seats.c[action.payload.position - 1] = action.payload;
          break;
        case "d":
          state.seats.d[action.payload.position - 1] = action.payload;
          break;
        case "e":
          state.seats.e[action.payload.position - 1] = action.payload;
          break;
        case "f":
          state.seats.f[action.payload.position - 1] = action.payload;
          break;
        case "g":
          state.seats.g[action.payload.position - 1] = action.payload;
          break;
      }
    },
    addSelectedSeat: (state, action: PayloadAction<SeatModels.IndividualSeat>) => {
      state.selectedSeats = [...state.selectedSeats, action.payload];
    },
    removeSelectedSeat: (state, action: PayloadAction<SeatModels.IndividualSeat>) => {
      const payloadId: string = `${action.payload.row}${action.payload.position}`
      const newSeatsArray = state.selectedSeats.filter((seat) => {
        const seatId = `${seat.row}${seat.position}`
        return seatId !== payloadId;
      })
      state.selectedSeats = newSeatsArray; 
    }
  },
});

export const { 
  resetAppState,
  createSeatsTemplate,
  changeSeatStatus,
  removeSelectedSeat,
  addSelectedSeat 
} = appReducer.actions;
export default appReducer.reducer;
