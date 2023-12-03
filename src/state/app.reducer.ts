import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppReducerModel } from "@/models/app-reducer.model";
import { SeatModels } from "@/models/seat.models";
import { StateService } from "@/services/state.service";
import { DateModels } from "@/models/date.models";
import { DateStatusEnum } from "@/enums/date-status.enum";
import { HourModels } from "@/models/hour.models";
import { HourStatusEnum } from "@/enums/hour-status.enum";
import { MovieModels } from "@/models/movie-models";

const initialState: AppReducerModel = {
  selectedMovie: {} as MovieModels.CleanMovie,
  seats: {
    a: [] as SeatModels.IndividualSeat[],
    b: [] as SeatModels.IndividualSeat[],
    c: [] as SeatModels.IndividualSeat[],
    d: [] as SeatModels.IndividualSeat[],
    e: [] as SeatModels.IndividualSeat[],
    f: [] as SeatModels.IndividualSeat[],
    g: [] as SeatModels.IndividualSeat[],
  },
  selectedSeats: [] as SeatModels.IndividualSeat[],
  dates: [] as DateModels.IndividualDate[],
  selectedDate: {} as DateModels.IndividualDate,
  hours: [] as HourModels.IndividualHour[],
  selectedHour: {} as HourModels.IndividualHour,
  totalPrice: 0,
};

export const appReducer = createSlice({
  name: "app-reducer",
  initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<MovieModels.CleanMovie>) => {
      state.selectedMovie = action.payload;
    },
    resetAppState: (state) => {
      state.selectedMovie = initialState.selectedMovie;
      state.seats = initialState.seats;
      state.selectedSeats = initialState.selectedSeats;
      state.dates = initialState.dates;
      state.selectedDate = initialState.selectedDate;
      state.hours = initialState.hours;
      state.selectedHour = initialState.selectedHour;
      state.totalPrice = initialState.totalPrice;
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
    },
    cleanSelectedSeats: (state) => {
      state.selectedSeats = initialState.selectedSeats;
    },
    createDatesTemplate: (state) => {
      state.dates = StateService.generateDatesTemplate();
    },
    changeDateStatus: (state, action: PayloadAction<DateModels.IndividualDate>) => {
      for(let i = 0; i < state.dates.length; i++){
        if(i === action.payload.position){
          state.dates[action.payload.position] = action.payload;
          continue;
        }
        state.dates[i].status = DateStatusEnum.notSelected;
      }
    },
    setSelectedDate: (state, action: PayloadAction<DateModels.IndividualDate>) => {
      state.selectedDate = action.payload;
    },
    createHoursTemplate: (state) => {
      state.hours = StateService.generateHoursTemplate();
    },
    changeHourStatus: (state, action: PayloadAction<HourModels.IndividualHour>) => {
      for(let i = 0; i < state.hours.length; i++){
        if(i === action.payload.position){
          state.hours[action.payload.position] = action.payload;
          continue;
        }
        state.hours[i].status = HourStatusEnum.notSelected;
      }
    },
    setSelectedHour: (state, action: PayloadAction<HourModels.IndividualHour>) => {
      state.selectedHour = action.payload;
    },
    setTotalPrice: (state) => {
      const basedSeatPrice: number = 85.48;
      state.totalPrice = state.selectedSeats.length * basedSeatPrice;
    }
  },
});

export const {
  setSelectedMovie,
  resetAppState,
  createSeatsTemplate,
  changeSeatStatus,
  removeSelectedSeat,
  addSelectedSeat,
  cleanSelectedSeats,
  createDatesTemplate,
  changeDateStatus,
  setSelectedDate,
  createHoursTemplate,
  changeHourStatus,
  setSelectedHour,
  setTotalPrice,
} = appReducer.actions;
export default appReducer.reducer;
