import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { produce } from 'immer'
import { Card } from './domain/Card'
export interface PlayerState {
    hand: Card[],
    board: Card[]
}

export interface Turn {
    target: 'player' | 'opponent'
    phase: TurnPhase
}

export enum TurnPhase {
    Draw = 1,
    Attack = 2,
    RobSpy = 3,
    Buy = 4,
    Build = 5
}

export interface GameState {
    status: 'unstarted' | 'starting' | 'playing' | 'gameover' | 'paused'
    setStatus: (status: 'unstarted' | 'starting' | 'playing' | 'gameover' | 'paused') => void
    deck: Card[]
    setDeck: (deck: Card[]) => void
    player: PlayerState
    setPlayerState: (player: PlayerState) => void
    opponent: PlayerState
    drawCard: (turn: 'player' | 'opponent', selectedCard?: Card) => void
    setOpponentState: (opponent: PlayerState) => void
    discard: Card[]
    discardCard: (target: 'player' | 'opponent', selectedCard: Card) => void
    setDiscard: (discard: Card[]) => void
    turn: Turn
    setTurn: (target: 'player' | 'opponent') => void
    setPhase: (phase: TurnPhase) => void
    putOnTop: (card: Card) => void
    reset: () => void
}

export const useGameState = create<GameState>()(persist<GameState>((set) => ({
    deck: [],
    status: 'unstarted',
    setStatus: (status: 'unstarted' | 'starting' | 'playing' | 'gameover' | 'paused') => set({ status }),
    setDeck: (deck: Card[]) => set({ deck }),
    player: {
        hand: [],
        board: []
    },
    opponent: {
        hand: [],
        board: []
    },
    drawCard: (turn: 'player' | 'opponent', selectedCard?: Card) => set((state: GameState) => produce(state, (draft) => {
        const targetDeck = turn === 'player' ? draft.player : draft.opponent
        if (targetDeck.hand.length === 7) {
            return 
        }
        if (draft.deck.length === 0) {
            draft.deck = draft.discard.sort(() => Math.random() - 0.5)
            draft.discard = []
        } else {
            const card = selectedCard ?? draft.deck.shift()
            if (selectedCard) {
                draft.deck = draft.deck.filter((c) => c.getId() !== selectedCard.getId())
            }
            if (card) {
                targetDeck.hand.push(card)
            } else {
                alert('No card to draw')
            }
        }
    })),
    discardCard: (target: 'player' | 'opponent', selectedCard: Card) => set(
        (state: GameState) => produce(state, (draft) => {
            draft[target].hand = draft[target].hand.filter(c => c.getId() !== selectedCard.getId())
            draft.discard.push(selectedCard)
        })
    ),
    setPlayerState: (player: PlayerState) => set({ player }),
    setOpponentState: (opponent: PlayerState) => set({ opponent }),
    putOnTop: (card: Card) => set((state: GameState) => produce(state, (draft) => {
        const index = draft.deck.findIndex((c) => c.getId() === card.getId())
        if (index !== -1) {
            draft.deck.splice(index, 1)
            draft.deck.unshift(card)
        }
    })),
    discard: [],
    setDiscard: (discard: Card[]) => set({ discard }),
    turn: {
        target: 'player',
        phase: TurnPhase.Draw
    },
    setTurn: (target: 'player' | 'opponent') => set({ turn: {target: target, phase: TurnPhase.Draw} }),
    setPhase: (phase: TurnPhase) => set((state: GameState) => produce(state, (draft) => {
        draft.turn.phase = phase
    })),
    reset: () => set({
        deck: [],
        status: 'unstarted',
        player: { hand: [], board: [] },
        opponent: { hand: [], board: [] },
        discard: [],
        turn: {
            target: 'player',
            phase: TurnPhase.Draw
        }
    })
}), {
    name: 'game-state',
    onRehydrateStorage: () => (state) => {   
        if (state) {
            state.deck = state?.deck.map((card) => Card.from(card))
            state.discard = state?.discard.map((card) => Card.from(card))
            state.player.hand = state?.player.hand.map((card) => Card.from(card))
            state.opponent.hand = state?.opponent.hand.map((card) => Card.from(card))
            state.player.board = state?.player.board.map((card) => Card.from(card))
            state.opponent.board = state?.opponent.board.map((card) => Card.from(card))
        }
    }
}))