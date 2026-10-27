import { useCallback, useState } from 'react'
import Welcome from './components/Welcome'
import Kitchen from './components/Kitchen'
import Case1 from './components/Case1'
import Case2 from './components/Case2'
import Case3 from './components/Case3'

type Screen = 'welcome' | 'kitchen' | 'case'

function App() {
  const [screen, setScreen] = useState<Screen>('welcome')
  // Number of solved cases (0..3). It also decides the cake image and which case is next,
  // so a case can never be skipped or replayed.
  const [solved, setSolved] = useState(0)

  const finishCase = useCallback(() => {
    setSolved((s) => Math.min(s + 1, 3))
    setScreen('kitchen')
  }, [])

  return (
    <main className="grid h-dvh w-screen place-items-center overflow-hidden bg-[#2B3F33]">
      <div className="stage">
        {screen === 'welcome' && <Welcome onStart={() => setScreen('kitchen')} />}
        {screen === 'kitchen' && <Kitchen solved={solved} onStartCase={() => setScreen('case')} />}
        {screen === 'case' && solved === 0 && <Case1 onComplete={finishCase} />}
        {screen === 'case' && solved === 1 && <Case2 onComplete={finishCase} />}
        {screen === 'case' && solved === 2 && <Case3 onComplete={finishCase} />}
      </div>
    </main>
  )
}

export default App
