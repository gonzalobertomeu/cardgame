import { useGameState } from "@/engine/GameState"
import { Card } from "../Card"

export const Player = () => {
    const player = useGameState((state) => state.player)
    const turn = useGameState((state) => state.turn)
    return (
        <div className={`bg-blue-100 h-1/4 flex flex-col justify-center ${turn === 'player' ? 'border-2 border-blue-500' : ''}`}>
            <div className="flex flex-row gap-4 justify-center items-center">
                {player.hand.map((card) => (
                    <Card key={card.getId()} card={card} player="player" flip={true}/>
                ))}
            </div>
        </div>
    )
}