import { create } from 'zustand'

import { Card } from './domain/Card'
export interface GameState {
    deck: Card[]
    setDeck: (deck: Card[]) => void
    hand: Card[]
    setHand: (hand: Card[]) => void
    opponent: Card[]
    setOpponent: (opponent: Card[]) => void
    discard: Card[]
    setDiscard: (discard: Card[]) => void
    board: Card[]
    setBoard: (board: Card[]) => void
}

export const useGameState = create<GameState>()((set) => ({
    deck: [],
    setDeck: (deck: Card[]) => set({ deck }),
    hand: [],
    setHand: (hand: Card[]) => set({ hand }),
    opponent: [],
    setOpponent: (opponent: Card[]) => set({ opponent }),
    discard: [],
    setDiscard: (discard: Card[]) => set({ discard }),
    board: [],
    setBoard: (board: Card[]) => set({ board }),
}))