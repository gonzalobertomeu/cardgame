import { v4 as uuidv4 } from 'uuid'

export type CardType = 'warrior' | 'resource' | 'special' | 'spell'
export type WarriorType = 'knight' | 'archer' | 'mage' | 'dragon'
export type ResourceType = 'gold' | 'arrow' | 'sword' | 'potion'
export type SpecialType = 'siege' | 'thief' | 'spy'


export class Card {
    private readonly id: string
    private readonly type: CardType

    constructor(type: CardType, id?: string) {
        this.id = id ?? uuidv4()
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

    static from(dto: Record<string, any>) {
        let card: Card
        if (dto.type === 'warrior') {
            card = new WarriorCard(dto.health, dto.warriorType, dto.id)
        }
        else if (dto.type === 'resource') {
            card = new ResourceCard(dto.amount, dto.resourceType, dto.id)
        }
        else if (dto.type === 'special') {
            card = new SpecialCard(dto.specialType, dto.id)
        }
        else if (dto.type === 'spell') {
            card = new SpellCard(dto.id)
        } else {
            throw new Error('Invalid card type')
        }
        return card
    }
}

export class WarriorCard extends Card {
    private readonly health: number
    private readonly warriorType: WarriorType
    constructor(health: number, warriorType: WarriorType, id?: string) {
        super('warrior', id)
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

    constructor(amount: number, resourceType: ResourceType, id?: string) {
        super('resource', id)
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
    
    constructor(specialType: SpecialType, id?: string) {
        super('special', id)
        this.specialType = specialType
    }

    getSpecialType() {
        return this.specialType
    }
}

export class SpellCard extends Card {
    constructor(id?: string) {
        super('spell', id)
    }
}