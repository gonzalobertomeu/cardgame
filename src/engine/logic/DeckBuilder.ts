import {
    Card,
    WarriorCard,
    ResourceCard,
    SpecialCard,
    SpellCard,
    WarriorType,
    ResourceType,
    SpecialType,
} from "../domain/Card";
export class DeckBuilder {
    public static buildDeck(): Card[] {
        const warriors = (["knight", "archer", "mage"] as WarriorType[]).map(
            (type: WarriorType) => {
                return [...Array(5)].map(() => new WarriorCard(10, type))
            }
        ).flat();
        warriors.push(new WarriorCard(10, "dragon"))
        const resources = (["arrow", "sword", "potion"] as ResourceType[]).map(
            (type: ResourceType) => {
                return [...Array(9).keys()].map((value) => new ResourceCard(value + 1, type))
            }
        ).flat();
        resources.push(...[1,2,3,4,5,5,6,7,7,8,9].map((value) => new ResourceCard(value, "gold")))
        const specials = (["siege", "thief", "spy"] as SpecialType[]).map(
            (type: SpecialType) => new SpecialCard(type)
        );
        const spells = [...Array(3)].map(() => new SpellCard());
        return [...warriors, ...resources, ...specials, ...spells].sort(() => Math.random() - 0.5)
    }
}
