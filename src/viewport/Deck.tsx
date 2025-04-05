import { useState } from "react"
import { Card as CardEntity } from "../engine/domain/Card"
import { useGameState } from "../engine/GameState"
import { GameEngine } from "../engine/GameEngine"
import { Card } from "./Card"
export type DeckProps = {
    deck: 'deck' | 'discard'
    drawCard?: () => void
}

export const Deck = ({ deck, drawCard }: DeckProps) => {
    const targetDeck = useGameState((state) => state[deck]) as CardEntity[]
    return (
        <div className="w-40 flex flex-col items-center justify-center">
            <button onClick={() => GameEngine.getInstance().drawCard()}>Draw Card</button>
            <div>
                {
                    targetDeck[0] && (
                        <Card 
                            key={targetDeck[0].getId()} 
                            card={targetDeck[0]} 
                            hidden={true}
                            disableHover
                        />
                    )
                }
            </div>
        </div>
    )
}