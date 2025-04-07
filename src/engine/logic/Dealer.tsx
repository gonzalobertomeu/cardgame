import { Time } from "@/engine/domain/Time"
import { useGameState } from "@/engine/GameState"
import { Shuffle } from "../domain/Shuffle"

export class Dealer {
    public static async dealFirstCards(countPerPlayer: number = 3): Promise<void> {
        const totalCards = 7
        const {deck, drawCard, putOnTop} = useGameState.getState()

        const warriors = deck.filter((card) => card.getType() === 'warrior').sort(Shuffle.random).slice(0, (countPerPlayer * 2))

        const restCards = deck.filter((card) => card.getType() !== 'warrior').sort(Shuffle.random).slice(0, ((7-countPerPlayer) * 2))


        restCards.forEach((card) => {
            putOnTop(card)
        })
        warriors.forEach((card) => {
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