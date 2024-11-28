import { useEffect } from 'react'
import s from './DecksList.module.css'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import { fetchDecksTC } from '../decks-thunks'
import { selectDecks } from '../decks-selectors'
import { useFetchDecks } from './useFetchDecks'

export const DecksList = () => {
  const {decks} = useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map((d) => (
        <DeckItem key={d.id} deck={d} />
      ))}
    </ul>
  )
}
