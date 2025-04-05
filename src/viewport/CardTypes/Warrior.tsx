import { WarriorCard } from "../../engine/domain/Card"

type WarriorProps = {
    card: WarriorCard
}

export const Warrior = ({card}: WarriorProps) => {
    const color = {
        'knight': 'bg-blue-200',
        'archer': 'bg-orange-200',
        'mage': 'bg-green-200',
    }
    return (
        <div className={`w-full h-full 
            rounded-sm 
            ${color[card.getWarriorType()]} 
            p-2 flex flex-col justify-center items-center`}
        >
            <h3>{card.getWarriorType().toUpperCase()}</h3>
            <p>{card.getHealth()}</p>
        </div>
    )
}