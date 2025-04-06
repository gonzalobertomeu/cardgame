import { GameEngine } from "@/engine/GameEngine"
import { IoSettingsSharp } from "react-icons/io5"

export const MenuButton = () => {
    return <div className="fixed top-0 left-0 p-2">
        <button 
            onClick={() => GameEngine.getInstance().pauseGame()} 
            className="bg-slate-300 rounded-full p-2 shadow-border"
        >
            <IoSettingsSharp size={30} className="text-slate-700"/>
        </button>
    </div>
}