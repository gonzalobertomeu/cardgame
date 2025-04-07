import { TurnPhase, useGameState } from "../GameState"
import { DrawPhase } from "./phases/DrawPhase"
export class TurnManager {
    private target: 'player' | 'opponent'
    private phase: TurnPhase

    constructor(target: 'player' | 'opponent', phase?: TurnPhase) {
        this.target = target
        this.phase = phase ?? TurnPhase.Draw
        useGameState.getState().setTurn(this.target)
        useGameState.getState().setPhase(this.phase)
    }

    public getTurn() {
        return this.target
    }

    public actions() {
        switch(this.phase) {
            case TurnPhase.Draw:
                return new DrawPhase(this.target)
        }
    }

    public nextPhase() {
        if (this.phase < 5) {
            this.phase++
            useGameState.getState().setPhase(this.phase)
        } else {
            this.endTurn()
        }
    }

    public endTurn() {
        useGameState.getState().setTurn(this.target === 'player' ? 'opponent' : 'player')
    }
}