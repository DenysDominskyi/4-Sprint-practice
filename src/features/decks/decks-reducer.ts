import { DeckItem } from "./decks-api"

const initialState = {
  decks: [] as DeckItem[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'GET_DECKS': {
      return {...state, decks: action.items}
    }
    case 'ADD_DECK': {
      return {
        ...state,
        decks: [action.payload.newDeck, ...state.decks]
      }
    }
    default:
      return state
  }
}

// Actions
export const getDecksAC = (items: DeckItem[]) => {
  return {
    type: 'GET_DECKS',
    items
  } as const
}

export const addDeckAC = (newDeck: DeckItem) => {
  return {
    type: 'ADD_DECK',
    payload: {newDeck}
  } as const
}

//types

type DecksActions = getDecks | addDeck

type getDecks = ReturnType<typeof getDecksAC>
type addDeck = ReturnType<typeof addDeckAC>