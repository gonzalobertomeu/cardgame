import { SpellCard } from "@/engine/domain/Card"

type SpellProps = {
    card: SpellCard
}

export const Spell = ({card}: SpellProps) => {
    return (
        <div className={`w-full h-full 
            rounded-sm 
            bg-white
            border-2 border-stone-500
            p-2 flex flex-col justify-center items-center`}
        >
            <h3>SPELL</h3>
        </div>
    )
}