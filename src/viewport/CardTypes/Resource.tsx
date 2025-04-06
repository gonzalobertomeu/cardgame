import { ResourceCard } from "@/engine/domain/Card"

type ResourceProps = {
    card: ResourceCard
}

export const Resource = ({card}: ResourceProps) => {
    const backgroundColor = {
        'gold': 'bg-yellow',
        'sword': 'bg-blue',
        'arrow': 'bg-orange',
        'potion': 'bg-green',
    }[card.getResourceType()] + '-100';
    const borderColor = {
        'gold': 'border-yellow-400',
        'sword': 'border-blue-400',
        'arrow': 'border-orange-400',
        'potion': 'border-green-400',
    }[card.getResourceType()];
    return (
        <div className={`w-full h-full rounded-sm border-2 ${borderColor} ${backgroundColor} p-2 flex flex-col justify-center items-center`}
        >
            <h3>{card.getResourceType().toUpperCase()}</h3>
            <p>{card.getType()}</p>
            <p>{card.getAmount()}</p>
        </div>
    )
}