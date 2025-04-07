import { Actions } from "./Actions"
import { Battlefield } from "./Battlefield"
import { Deck } from "./Deck"
export const Board = () => {
    return (
        <div className="bg-yellow-100 h-2/4 flex flex-row">
            <Actions/>
            <Battlefield/>
            <Deck deck={'deck'}/>
        </div>
    )
}