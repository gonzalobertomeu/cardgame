import { useGameState } from "@/engine/GameState"
import { Card } from "../Card"
    
export const Opponent = () => {
    const opponent = useGameState((state) => state.opponent)
    const turn = useGameState((state) => state.turn)
    return (
        <div className={`bg-red-100 h-1/4 flex flex-col justify-center ${turn === 'opponent' ? 'border-2 border-blue-500' : ''}`}>
            <div className="flex flex-row gap-4 justify-center items-center">
                {opponent.hand.map((card) => (
                    <Card key={card.getId()} card={card} player="opponent" hidden={true} disableHover/>
                ))}
            </div>
        </div>
    )
}