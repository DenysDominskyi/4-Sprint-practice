import { AppDispatch } from "../../app/store"
import { decksApi } from "./decks-api"
import { addDeckAC, getDecksAC } from "./decks-reducer"

export const fetchDecksTC = () => {
    return async (dispatch: AppDispatch) => {
        const res = await decksApi.getDecks()
        dispatch(getDecksAC(res.data.items))
    }
}

export const addDeckTC = (name: string) => {
    return async (dispatch: AppDispatch) => {
        const res = await decksApi.addDeck(name)
        return dispatch(addDeckAC(res.data))
    }
}