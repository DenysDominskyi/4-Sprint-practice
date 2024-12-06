import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { changeAppStatusAC } from '../../app/app-reducer.ts'

// export const fetchDecksTC = () => (dispatch: Dispatch) => {
//   dispatch(changeAppStatusAC('loading'))
//   decksAPI.fetchDecks().then((res) => {
//     dispatch(changeAppStatusAC('succeeded'))
//     dispatch(setDecksAC(res.data.items))
//   })
// }

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(changeAppStatusAC('loading'))
    const res = await decksAPI.fetchDecks()
    dispatch(changeAppStatusAC('succeeded'))
    dispatch(setDecksAC(res.data.items))
  } catch (error) {
    changeAppStatusAC('failed')
  }
}

export const addDeckTC = (name: string) => async (dispatch: Dispatch) => {
  return decksAPI.addDeck(name).then((res) => {
    dispatch(addDeckAC(res.data))
  })
}

export const deleteDeckTC = (id: string) => async (dispatch: Dispatch) => {
  return decksAPI.deleteDeck(id).then((res) => {
    dispatch(deleteDeckAC(res.data.id))
  })
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  return decksAPI.updateDeck(params).then((res) => {
    dispatch(updateDeckAC(res.data))
  })
}
