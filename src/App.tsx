import { useState } from 'react'

type Screen = 'start' | 'question1' | 'question2' | 'complete'

function App() {
  const [screen, setScreen] = useState<Screen>('start')
  const [feedback, setFeedback] = useState('')

  function goTo(nextScreen: Screen) {
    setFeedback('')
    setScreen(nextScreen)
  }

  const buttonStyle =
    'cursor-pointer rounded-2xl bg-[#F28C98] px-8 py-4 text-xl font-bold text-white shadow-md hover:bg-[#E56F80]'

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFF3DF] p-6">
      <div className="w-full max-w-3xl rounded-[32px] border-4 border-[#E9BFA6] bg-[#FFFDF7] p-10 text-center shadow-xl">

        <div className="mb-5 text-7xl">🐱🎂</div>

        <h1 className="mb-6 text-4xl font-extrabold text-[#80543F]">
          A Cake for Professor Cat
        </h1>

        {screen === 'start' && (
          <div className="space-y-6">
            <p className="text-xl text-[#80543F]">
              Help the little kitten prepare a birthday cake!
            </p>

            <button
              className={buttonStyle}
              onClick={() => goTo('question1')}
            >
              Start Game!
            </button>
          </div>
        )}

        {screen === 'question1' && (
          <div className="space-y-6">
            <p className="font-bold text-[#B67B66]">
              LEVEL 1 — QUESTION 1/2
            </p>

            <div className="rounded-2xl bg-[#FFF3DF] p-6">
              <p className="mb-3 text-xl font-bold text-[#80543F]">
                🤖 AI says:
              </p>
              <p className="text-xl text-[#80543F]">
                "Students who drink more coffee get higher grades.
                So coffee improves grades!"
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#80543F]">
              Is this conclusion correct?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                className={buttonStyle}
                onClick={() => setFeedback('Not quite! Try again.')}
              >
                YES
              </button>

              <button
                className={buttonStyle}
                onClick={() => setFeedback('correct')}
              >
                NO
              </button>
            </div>

            {feedback === 'correct' ? (
              <div className="space-y-4">
                <p className="text-xl font-bold text-green-700">
                  Correct! Correlation does not prove causation!
                </p>

                <button
                  className={buttonStyle}
                  onClick={() => goTo('question2')}
                >
                  Next Question →
                </button>
              </div>
            ) : (
              feedback && (
                <p className="text-xl font-bold text-red-600">
                  {feedback}
                </p>
              )
            )}
          </div>
        )}

        {screen === 'question2' && (
          <div className="space-y-6">
            <p className="font-bold text-[#B67B66]">
              LEVEL 1 — QUESTION 2/2
            </p>

            <h2 className="text-2xl font-bold text-[#80543F]">
              What else could explain this?
            </h2>

            <div className="flex flex-col gap-4">
              <button
                className={buttonStyle}
                onClick={() => setFeedback('Try again!')}
              >
                A. Coffee gives students perfect grades.
              </button>

              <button
                className={buttonStyle}
                onClick={() => setFeedback('correct')}
              >
                B. These students may also study longer.
              </button>

              <button
                className={buttonStyle}
                onClick={() => setFeedback('Try again!')}
              >
                C. Grades depend only on coffee.
              </button>
            </div>

            {feedback === 'correct' ? (
              <div className="space-y-4">
                <p className="text-xl font-bold text-green-700">
                  Correct! There may be another explanation!
                </p>

                <button
                  className={buttonStyle}
                  onClick={() => goTo('complete')}
                >
                  Continue →
                </button>
              </div>
            ) : (
              feedback && (
                <p className="text-xl font-bold text-red-600">
                  {feedback}
                </p>
              )
            )}
          </div>
        )}

        {screen === 'complete' && (
          <div className="space-y-6">
            <div className="text-7xl">🍰</div>

            <h2 className="text-3xl font-bold text-[#80543F]">
              Level 1 Complete!
            </h2>

            <p className="text-xl text-[#80543F]">
              You earned the cake base!
            </p>

            <button
              className={buttonStyle}
              onClick={() => goTo('start')}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default App