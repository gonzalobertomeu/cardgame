import { Card as CardEntity } from "@/engine/domain/Card"
import { useGameState } from "@/engine/GameState"
import { GameEngine } from "@/engine/GameEngine"
import { Card } from "@/viewport/Card"
export type DeckProps = {
    deck: 'deck' | 'discard'
    drawCard?: () => void
}

export const Deck = ({ deck, drawCard }: DeckProps) => {
    const targetDeck = useGameState((state) => state[deck]) as CardEntity[]
    const status = useGameState((state) => state.status)
    const handleClick = () => {
        if (status === 'starting') {
            return
        }
        GameEngine.getInstance().drawCard()
    }
    return (
        <div className="w-40 flex flex-col items-center justify-center z-20">
            <button onClick={handleClick}>
                {
                    targetDeck[0] && (
                        <Card 
                            key={targetDeck[0].getId()} 
                            card={targetDeck[0]} 
                            hidden={true}
                            disableHover={status === 'starting'}
                        />
                    )
                }
            </button>
        </div>
    )
}