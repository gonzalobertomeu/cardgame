import { Card as CardEntity } from "../../engine/domain/Card"

type DefaultCardProps = {
    card: CardEntity
}

export const DefaultCard = ({card}: DefaultCardProps) => {
    return (
        <div className="w-full h-full rounded-sm bg-slate-200 p-2 flex flex-col justify-center items-center">
            <p>{card.getType()}</p>
        </div>
    )
}