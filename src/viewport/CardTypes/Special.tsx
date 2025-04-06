import { SpecialCard } from "../../engine/domain/Card"

type SpecialProps = {
    card: SpecialCard
}

export const Special = ({card}: SpecialProps) => {
    // const fontColor = card.getSpecialType() === 'dragon' ? 'text-white' : 'text-black'
    return (
        <div className={`w-full h-full 
            rounded-sm 
            bg-slate-200
            p-2 flex flex-col justify-center items-center`}
        >
            <h3>{card.getSpecialType().toUpperCase()}</h3>
        </div>
    )
}