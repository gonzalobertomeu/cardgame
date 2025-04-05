import { create } from 'zustand'

import { Card } from './domain/Card'
export interface PlayerState {
    hand: Card[],
    board: Card[]
}
export interface GameState {
    deck: Card[]
    setDeck: (deck: Card[]) => void
    player: PlayerState
    setPlayerState: (player: PlayerState) => void
    opponent: PlayerState
    setOpponentState: (opponent: PlayerState) => void
    discard: Card[]
    setDiscard: (discard: Card[]) => void
    turn: 'player' | 'opponent'
    setTurn: (turn: 'player' | 'opponent') => void
}

export const useGameState = create<GameState>()((set) => ({
    deck: [],
    setDeck: (deck: Card[]) => set({ deck }),
    player: {
        hand: [],
        board: []
    },
    opponent: {
        hand: [],
        board: []
    },
    setPlayerState: (player: PlayerState) => set({ player }),
    setOpponentState: (opponent: PlayerState) => set({ opponent }),
    discard: [],
    setDiscard: (discard: Card[]) => set({ discard }),
    turn: 'player',
    setTurn: (turn: 'player' | 'opponent') => set({ turn }),
}))