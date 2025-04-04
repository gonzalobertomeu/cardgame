export type CardType = 'warrior' | 'resource' | 'special' | 'spell'
export type WarriorType = 'knight' | 'archer' | 'mage'
export type ResourceType = 'gold' | 'arrow' | 'sword' | 'potion'
export type SpecialType = 'siege' | 'thief' | 'spy'

import { v4 as uuidv4 } from 'uuid'

export class Card {
    private readonly id: string
    private readonly type: CardType

    constructor(type: CardType) {
        this.id = uuidv4()
        this.type = type
    }

    getId() {
        return this.id
    }

    getType() {
        return this.type
    }

    dto() {
        const json: Record<string, any> = {};
        for (const key of Object.keys(this)) {
            json[key] = (this as any)[key];
        }
        return json;
    }
}

export class WarriorCard extends Card {
    private readonly health: number
    private readonly warriorType: WarriorType
    constructor(health: number, warriorType: WarriorType) {
        super('warrior')
        this.health = health
        this.warriorType = warriorType
    }

    getHealth() {
        return this.health
    }

    getWarriorType() {
        return this.warriorType
    }
}

export class ResourceCard extends Card {
    private readonly amount: number
    private readonly resourceType: ResourceType

    constructor(amount: number, resourceType: ResourceType) {
        super('resource')
        this.amount = amount
        this.resourceType = resourceType
    }

    getAmount() {
        return this.amount
    }

    getResourceType() {
        return this.resourceType
    }
}

export class SpecialCard extends Card {
    private readonly specialType: SpecialType
    
    constructor(specialType: SpecialType) {
        super('special')
        this.specialType = specialType
    }

    getSpecialType() {
        return this.specialType
    }
}

export class SpellCard extends Card {
    constructor() {
        super('spell')
    }
}