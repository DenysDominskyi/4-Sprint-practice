import { Dispatch } from 'redux'
import { decksAPI, UpdateDeckParams } from './decks-api.ts'
import { addDeckAC, deleteDeckAC, setDecksAC, updateDeckAC } from './decks-reducer.ts'
import { changeAppStatusAC } from '../../app/app-reducer.ts'
import { errorHandler } from '../../common/utils/handle-error.ts'

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
  try {
    throw new Error('Badaboom!')
    const res = await decksAPI.deleteDeck(id)
    dispatch(deleteDeckAC(res.data.id))
  } catch (e: any) {
    errorHandler(dispatch, e)
  } finally {
    setTimeout(() => {
      errorHandler(dispatch, null)
    }, 0)
  }
}

//case-1: ошибки бэкенда (на стороне бэкенда). Ошибку создает axios, e.responce.data
//case-2: network error - axios создает объект ошибки, сообщение можно взять из поля e.message
//case-3: синхронные ошибки - создаётся "нативная" JS-ошибка, имеет поле message

export const updateDeckTC = (params: UpdateDeckParams) => async (dispatch: Dispatch) => {
  try {
    // throw new Error('Badaboom!')
    const res = await decksAPI.updateDeck(params)
    dispatch(updateDeckAC(res.data))
  } catch (e: any) {
    errorHandler(dispatch, e)
  } finally {
    setTimeout(() => {
      errorHandler(dispatch, null)
    }, 0)
  }
}
