import { AppRootState } from "../../app/store";

export const selectDecks = (state: AppRootState) => state.decksReducer.decks