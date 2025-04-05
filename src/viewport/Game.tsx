import { Board } from "./Board"
import { Opponent } from "./Opponent"
import { Player } from "./Player"
import { useEffect } from "react"
import { GameEngine } from "../engine/GameEngine"   

export const Game = () => {
    useEffect(() => {
        GameEngine.getInstance().startGame()
    }, [])
    return (
        <div className="h-screen w-screen flex flex-col bg-slate-300">
            <Opponent />
            <Board />
            <Player />
        </div>
    )
}