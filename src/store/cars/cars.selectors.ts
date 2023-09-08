import { createSelector } from "@reduxjs/toolkit";
import { CarState } from "./cars.reducers";

interface RootState{
    masiniState:CarState,

}

const selectCarsState=(state:RootState)=>state.masiniState;

export const selectCars=createSelector(
    selectCarsState,
    (masiniState):typeof masiniState.masini => masiniState.masini
)

export const selectRetrieveCarsState=createSelector(
    selectCarsState,
    (masiniState):typeof masiniState.retrieveMasiniState => masiniState.retrieveMasiniState
);

export const selectAddCarsState=createSelector(
    selectCarsState,
    (masiniState):typeof masiniState.addCarState => masiniState.addCarState
);