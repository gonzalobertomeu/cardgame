import { GameEngine } from "@/engine/GameEngine"
import { useGameState } from "@/engine/GameState"

export const Menu = () => {
    const status = useGameState((state) => state.status)
    const startGame = () => {
        if (status === 'paused') {
            useGameState.getState().reset()
        }
        GameEngine.getInstance().startGame()
    }
    const resumeGame = () => {
        GameEngine.getInstance().resumeGame()
    }
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center absolute top-0 left-0 z-50 bg-black/50">
            <div className="w-1/5 h-1/2 bg-white rounded-md flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">CARD GAME</h1>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={startGame}>
                    {
                        status === 'unstarted' ? 'Start Game' : 'Reset Game'
                    }
                </button>
                <button className="bg-green-500 text-white p-2 rounded-md" onClick={resumeGame}>
                    Resume Game
                </button>
            </div>
        </div>
    )
}