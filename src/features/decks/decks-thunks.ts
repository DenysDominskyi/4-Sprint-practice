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

//case-1: ошибки бэкенда (на стороне бэкенда). Ошибку создает axios, e.responce.data
//case-2: network error - axios создает объект ошибки, сообщение можно взять из поля e.message
//case-3: синхронные ошибки - создаётся "нативная" JS-ошибка, имеет поле message

export function errorHandler (err: any) {
  if(err.response){
    console.log(err.response.data.errorMessages[0].message)
  } else if (err.message) {
    console.log(err.message)
  } else {
    console.log(err)
  }
}

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e: any) {
    errorHandler(e)
  }
}
