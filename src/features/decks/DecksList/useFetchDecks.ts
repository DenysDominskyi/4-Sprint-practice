import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { selectDecks } from '../decks-selectors'
import { fetchDecksTC } from '../decks-thunks'

export const useFetchDecks = () => {
  const decks = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks
  }
}
