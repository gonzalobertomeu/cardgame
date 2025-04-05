import { create } from 'zustand'
import { produce } from 'immer'
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
    drawCard: (turn: 'player' | 'opponent') => void
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
    drawCard: (turn: 'player' | 'opponent') => set((state: GameState) => produce(state, (draft) => {
        const targetDeck = turn === 'player' ? draft.player : draft.opponent
        const [card,...deck] = draft.deck
        if (card) {
            targetDeck.hand.push(card)
            draft.deck = deck
        } else {
            // reshuffle discard into deck
        }
    })),
    setPlayerState: (player: PlayerState) => set({ player }),
    setOpponentState: (opponent: PlayerState) => set({ opponent }),
    discard: [],
    setDiscard: (discard: Card[]) => set({ discard }),
    turn: 'player',
    setTurn: (turn: 'player' | 'opponent') => set({ turn }),
}))