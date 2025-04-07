import { GameEngine } from "@/engine/GameEngine"

export const Actions = () => {

    const handleChangeTurn = () => {
        GameEngine.getInstance().changeTurn()
    }

    return <div className="flex flex-col p-4 gap-4 justify-center items-center">
        <button 
            onClick={handleChangeTurn}
            className="shadow-border p-2 bg-purple-300 text-slate-900 font-bold rounded-lg">
            Finalizar turno
        </button>
    </div>
}