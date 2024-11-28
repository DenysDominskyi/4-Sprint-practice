import { useEffect } from 'react'
import s from './DecksList.module.css'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import { fetchDecksTC } from '../decks-thunks'

export const DecksList = () => {
  const decks = useAppSelector((state: AppRootState) => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(()=>{
      dispatch(fetchDecksTC())
  }, [])

  return <ul className={s.list}>
    {decks.map(d => <DeckItem key={d.id} deck={d}/>)}
  </ul>
}
