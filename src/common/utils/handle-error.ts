import { isAxiosError } from 'axios'
import { Dispatch } from 'react'
import { changeAppErrorAC } from '../../app/app-reducer'
import { AppDispatch } from '../../app/store'

export function errorHandler(dispatch: AppDispatch, e: any) {
  let errorMessage: string
  if (e === null) {
    return dispatch(changeAppErrorAC(e))
  } else if (isAxiosError(e)) {
    errorMessage = e.response ? e.response.data.errorMessages[0].message : e.message
  } else {
    errorMessage = (e as Error).message
  }
  dispatch(changeAppErrorAC(errorMessage))
}
