import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Masina from "../../models/Masina";
import {LoadingState } from "../../ActionTypes/LoadingState";

export interface CarState{
    masini : Masina[],
    retrieveMasiniState: LoadingState,
    addCarState:LoadingState
}

const masiniInitialState : CarState ={
    masini :[],
    retrieveMasiniState: LoadingState.NONE,
    addCarState:LoadingState.NONE
}

const masiniSlice = createSlice({
    name:"load",
    initialState:masiniInitialState,
    reducers:{
        loadMasini(state,action : PayloadAction<Masina[]>){
            state.masini=action.payload
        },
        retrieveMasiniLoading(state,action:PayloadAction<void>){
            state.retrieveMasiniState=LoadingState.LOADING
        },
        retriveMasiniError(state,action:PayloadAction<void>){
            state.retrieveMasiniState=LoadingState.ERROR
        },
        retriveMasiniSucces(state,action:PayloadAction<void>){
            state.retrieveMasiniState=LoadingState.SUCCES
        },
        addMasina(state,action:PayloadAction<Masina>){            
            state.masini.push(action.payload);
        },
        addMasinaLoading(state,action:PayloadAction<void>){
            state.addCarState=LoadingState.LOADING
        },
        addMasinaError(state,action:PayloadAction<void>){
            state.addCarState=LoadingState.ERROR
        },
        addMasinaSucces(state,action:PayloadAction<void>){
            state.addCarState=LoadingState.SUCCES
        },
        deleteMasina(state,action:PayloadAction<Masina>){
            state.masini=state.masini.filter((masina)=>masina.id === action.payload.id);
        },
        updateMasina(state,action:PayloadAction<Masina>){
            state.masini.find((masina)=>masina.id===action.payload.id);
        }
    }
})

export const {loadMasini,retrieveMasiniLoading,retriveMasiniError,retriveMasiniSucces,addMasina,deleteMasina,addMasinaError,addMasinaLoading,addMasinaSucces} = masiniSlice.actions;
export default masiniSlice.reducer;