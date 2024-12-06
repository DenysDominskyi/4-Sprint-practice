import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useFetchDecks } from './useFetchDecks.ts'
import Skeleton from 'react-loading-skeleton'
import { DeckItemSkeleton } from './DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useFetchDecks()

  return (
    <>
      <ul className={s.list}>
        {isLoading && decks.length === 0 && <DeckItemSkeleton count={10} />}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni hic quibusdam inventore quos quis
        fugiat neque dolorum maiores ratione repellendus fugit adipisci, fuga, dignissimos sunt temporibus impedit
        nostrum praesentium!
      </footer>
    </>
  )
}
