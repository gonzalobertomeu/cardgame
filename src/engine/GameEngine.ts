import { DeckBuilder } from "./logic/DeckBuilder"
import { useGameState } from "./GameState"

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
    
}