import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect, useLayoutEffect, useState } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  const [isLoading, setIsLosading] = useState(false)

  useLayoutEffect(() => {
    setIsLosading(true)
    dispatch(fetchDecksTC()).finally(()=>{
      setIsLosading(false)
    })
  }, [dispatch])

  return {
    decks,
    isLoading
  }
}
