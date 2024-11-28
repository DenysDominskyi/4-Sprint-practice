import { AppDispatch } from '../../app/store'
import { AddDeckParams, decksApi } from './decks-api'
import { addDeckAC, getDecksAC } from './decks-reducer'

export const fetchDecksTC = () => {
  return async (dispatch: AppDispatch) => {
    const res = await decksApi.getDecks()
    dispatch(getDecksAC(res.data.items))
  }
}

export const addDeckTC = (params: AddDeckParams) => {
  return async (dispatch: AppDispatch) => {
    const res = await decksApi.addDeck(params)
    return dispatch(addDeckAC(res.data))
  }
}
