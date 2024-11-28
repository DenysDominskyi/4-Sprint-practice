import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<BaseResponse>('/v2/decks')
  },
  addDeck(name: string) {
    return instance.post<DeckItem>('/v1/decks', {name})
  }
}

//Types
export type BaseResponse = {
  items: DeckItem[]
  pagination: ResponsePagination
}

export type DeckItem = {
  isFavorite: boolean
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: true
  cover: string
  created: string
  updated: string
  cardsCount: number
}
type ResponsePagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}