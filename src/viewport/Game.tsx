import { Board } from "@/viewport/sections/Board"
import { Opponent } from "@/viewport/sections/Opponent"
import { Player } from "@/viewport/sections/Player"
import { Menu } from "@/Menu"
import { useGameState } from "@/engine/GameState"
import { MenuButton } from "@/components/MenuButton"

export const Game = () => {
    const status = useGameState((state) => state.status)

    // useEffect(() => {
    //     GameEngine.getInstance().startGame()
    // }, [])
    return (
        <>
            {(status === 'unstarted' || status === 'paused') && <Menu />}
            <div className="h-screen w-screen flex flex-col bg-slate-300">
                <MenuButton/>
                <Opponent />
                <Board />
                <Player />
            </div>
        </>
    )
}