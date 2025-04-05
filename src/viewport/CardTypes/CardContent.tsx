import { Card as CardEntity, WarriorCard, ResourceCard } from "../../engine/domain/Card"
import { Warrior } from "./Warrior"
import { DefaultCard } from "./Default"
import { Resource } from "./Resource"
type CardContentProps = {
    card: CardEntity
}
export const CardContent = ({card}: CardContentProps) => {
    if (card instanceof WarriorCard) {
        return <Warrior card={card}/>
    }
    if (card instanceof ResourceCard) {
        return <Resource card={card}/>
    }
    return <DefaultCard card={card}/>
}