import { Card } from "@/engine/domain/Card";
import { PlayerState, useGameState } from "@/engine/GameState";

export interface DrawActions {
    discard: (card: Card) => void | true
}

export class DrawPhase {
    private hand: Card[]
    private target: 'player' | 'opponent'

    constructor(target: 'player' | 'opponent') {
        this.hand = useGameState.getState()[target].hand
        this.target = target
    }

    public get() {
        const actions: any = {}
        const self = this
        if (this.hand.length == 7) {
            actions.discard = function discard(card: Card) {
                if (!self.hand.some((c: Card) => c.getId() === card.getId())) {
                    console.log('The specified card is not in your hand')
                    return
                }
                useGameState.getState().discardCard(self.target, card)
                this.discard = () => {
                    console.log('Ya ejecutaste discard')
                }
            }
        }
    }
}