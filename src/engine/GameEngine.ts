import { DeckBuilder } from "./logic/DeckBuilder"
import { useGameState } from "./GameState"
import { Card } from "./domain/Card"
import { produce } from 'immer'
import { Dealer } from "./logic/Dealer"
import { TurnManager } from "./logic/TurnManager"

export class GameEngine {
    private static instance: GameEngine

    private turnManager: TurnManager|undefined

    private constructor() {}

    public static getInstance(): GameEngine {
        if (!GameEngine.instance) { 
            GameEngine.instance = new GameEngine()
        }
        return GameEngine.instance
    }

    public async startGame() {
        const deck = DeckBuilder.buildDeck()
        useGameState.getState().setDeck(deck)
        useGameState.getState().setStatus('starting')
        await Dealer.dealFirstCards()
        useGameState.getState().setStatus('playing')
        this.turnManager = new TurnManager('player')
    }

    public changeTurn() {
        if (this.turnManager) {
            const actualTurn = this.turnManager.getTurn()
            this.turnManager = new TurnManager(actualTurn === 'player' ? 'opponent' : 'player')
        } else {
            this.turnManager = new TurnManager('player')
        }
    }

    public drawCard() {
        const turn = useGameState.getState().turn.target
        useGameState.getState().drawCard(turn)
    }

    public pauseGame() {
        useGameState.getState().setStatus('paused')
    }

    public resumeGame() {
        useGameState.getState().setStatus('playing')
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