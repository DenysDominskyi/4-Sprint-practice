export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'APP/CHANGE-STATUS': {
      return {
        ...state,
        status: action.status
      }
    }
    case 'APP/CHANGE-ERROR': {
      return {
        ...state,
        error: action.err
      }
    }
    default:
      return state
  }
}

//actions
export const changeAppStatusAC = (status: RequestStatusType) => {
  return {
    type: "APP/CHANGE-STATUS",
    status
  } as const
}
export const changeAppErrorAC = (err: null | string) => {
  return {
    type: "APP/CHANGE-ERROR",
    err
  } as const
}

//types

type ActionsType = ReturnType<typeof changeAppStatusAC> | ReturnType<typeof changeAppErrorAC>
