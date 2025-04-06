import { Board } from "./Board"
import { Opponent } from "./Opponent"
import { Player } from "./Player"
import { Menu } from "../Menu"
import { useGameState } from "../engine/GameState"
import { IoSettingsSharp } from "react-icons/io5";
import { GameEngine } from "../engine/GameEngine";
export const Game = () => {
    const status = useGameState((state) => state.status)

    // useEffect(() => {
    //     GameEngine.getInstance().startGame()
    // }, [])
    return (
        <>
            {(status === 'unstarted' || status === 'paused') && <Menu />}
            <div className="h-screen w-screen flex flex-col bg-slate-300">
                <div className="fixed top-0 left-0 p-2">
                    <button onClick={() => GameEngine.getInstance().pauseGame()} className="bg-slate-700 rounded-full p-2">
                        <IoSettingsSharp size={30} className="text-white"/>
                    </button>
                </div>
                <Opponent />
                <Board />
                <Player />
            </div>
        </>
    )
}