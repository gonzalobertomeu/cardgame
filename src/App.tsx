import { useGameState } from './engine/GameState'
import { Game } from './viewport/Game'

function App() {
  const deck = useGameState((state) => state.deck)
  return (
    <>
      <Game />
    </>
  )
}

export default App
