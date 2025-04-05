import { Card } from "../engine/domain/Card"
import { GameEngine } from "../engine/GameEngine"

export const Deck = () => {

    return (
        <div className="w-40">
            <h1>Deck</h1>
            <button onClick={() => GameEngine.getInstance().drawCard()}>Draw Card</button>
        </div>
    )
}