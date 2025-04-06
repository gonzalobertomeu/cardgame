import { Card as CardEntity, WarriorCard, ResourceCard, SpecialCard, SpellCard } from "@/engine/domain/Card"
import { Warrior } from "./Warrior"
import { DefaultCard } from "./Default"
import { Resource } from "./Resource"
import { Special } from "./Special"
import { Spell } from "./Spell"
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
    if (card instanceof SpecialCard) {
        return <Special card={card}/>
    }
    if (card instanceof SpellCard) {
        return <Spell card={card}/>
    }
    return <DefaultCard card={card}/>
}