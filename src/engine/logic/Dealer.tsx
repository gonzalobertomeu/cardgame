import { Time } from "@/engine/domain/Time"
import { useGameState } from "@/engine/GameState"

export class Dealer {
    public static async dealFirstWarriors(countPerPlayer: number = 3): Promise<void> {
        const totalCards = 7
        const {deck, drawCard, putOnTop} = useGameState.getState()

        const warriors = deck.filter((card) => card.getType() === 'warrior').sort(() => Math.random() - 0.5)
        const drawableWarriors = warriors.slice(0, (countPerPlayer * 2) - 1)

        drawableWarriors.forEach((card) => {
            putOnTop(card)
        })
        await Time.tick()
        
        for (const _ of Array(totalCards).keys()) {
            drawCard('player')
            await Time.tick()
            drawCard('opponent')
            await Time.tick()
        }
    }
}