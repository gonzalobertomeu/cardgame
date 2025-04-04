import { useGameState } from './engine/GameState'
import { GameEngine } from './engine/GameEngine'
function App() {
  const deck = useGameState((state) => state.deck)
  return (
    <>
      <h1 className="bg-slate-200">Hola mundo</h1>
      <button onClick={() => GameEngine.getInstance().startGame()}>
        Start Game
      </button>
      <ul>
        {deck.map(card => {
          return <li key={card.getId()}>
            {JSON.stringify(card.dto())}
          </li>
        })}
      </ul>
    </>
  )
}

export default App
