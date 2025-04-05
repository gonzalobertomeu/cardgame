import { DeckBuilder } from "./logic/DeckBuilder"
import { useGameState } from "./GameState"
import { Card } from "./domain/Card"
import { produce } from 'immer'

export class GameEngine {
    private static instance: GameEngine

    private constructor() {}

    public static getInstance(): GameEngine {
        if (!GameEngine.instance) { 
            GameEngine.instance = new GameEngine()
        }
        return GameEngine.instance
    }

    public startGame() {
        const deck = DeckBuilder.buildDeck()
        useGameState.getState().setDeck(deck)
    }

    public drawCard() {
        const turn = useGameState.getState().turn
        useGameState.getState().drawCard(turn)
        useGameState.getState().setTurn(
            useGameState.getState().turn === 'player' ? 'opponent' : 'player'   
        )
    }

    public playCard(card: Card, player: 'player' | 'opponent') {
        const targetDeck = player === 'player' ? useGameState.getState().player : useGameState.getState().opponent
        const setTargetDeck = player === 'player' ? useGameState.getState().setPlayerState : useGameState.getState().setOpponentState
        if (targetDeck.hand.includes(card)) {
            setTargetDeck(produce(targetDeck, (draft) => {
                draft.board.push(card)
                draft.hand = draft.hand.filter((c) => c.getId() !== card.getId())
            }))
        } else {
            //reshuffle discard into deck
        }
    }   
}