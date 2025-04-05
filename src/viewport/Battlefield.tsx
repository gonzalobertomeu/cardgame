import { useGameState } from "../engine/GameState"
import { Card } from "./Card"

export const Battlefield = () => {
    const player = useGameState((state) => state.player.board)
    const opponent = useGameState((state) => state.opponent.board)
    return (
        <div className="bg-green-100 grow flex flex-col">
            <div className="flex flex-row h-1/2 bg-slate-200 gap-2">
                {opponent.map((card) => (
                    <Card key={card.getId()} card={card} flip={true}/>
                ))}
            </div>
            <div className="flex flex-row h-1/2 bg-slate-200 gap-2">
                {player.map((card) => (
                    <Card key={card.getId()} card={card} />
                ))}
            </div>
        </div>
    )
}