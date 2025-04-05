import { useGameState } from "../engine/GameState"
import { Card } from "./Card"
    
export const Opponent = () => {
    const opponent = useGameState((state) => state.opponent)
    return (
        <div className="bg-red-100 h-1/4">
            <h1>Opponent</h1>
            <div className="flex flex-row gap-4 justify-center items-center">
                {opponent.hand.map((card) => (
                    <Card key={card.getId()} card={card} player="opponent" hidden={true}/>
                ))}
            </div>
        </div>
    )
}