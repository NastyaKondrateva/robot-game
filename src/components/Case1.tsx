import { useState } from 'react'
import LevelShell from './LevelShell'
import ChoiceStep from './ChoiceStep'
import { case1, caseMeta } from '../data/gameData'

export default function Case1({ onComplete }: { onComplete: () => void }) {
  const [i, setI] = useState(0)
  const [stage, setStage] = useState<'yn' | 'alt'>('yn')
  const [done, setDone] = useState(0)
  const s = case1[i]
  const last = i === case1.length - 1

  const statement = (
    <div className={`rounded-[1.5cqw] bg-[#F4E7C8] ${stage === 'yn' ? 'p-[2.2cqw]' : 'p-[1.2cqw]'}`}>
      <p className="mb-[0.5cqw] text-[1.8cqw] font-bold text-[#7A4B2A]">AI says:</p>
      <p className={`font-story font-bold text-[#3B2A14] ${stage === 'yn' ? 'text-[3cqw]' : 'text-[2cqw]'}`}>{s.statement}</p>
    </div>
  )

  return (
    <LevelShell {...caseMeta[1]} total={case1.length} done={done}>
      {stage === 'yn' ? (
        <ChoiceStep
          key={`${s.id}-yn`}
          intro={statement}
          prompt={s.question}
          options={['Yes', 'No']}
          correctIndex={s.answer === 'Yes' ? 0 : 1}
          feedback={s.explanation}
          layout="row"
          nextLabel="Next Clue →"
          onNext={() => setStage('alt')}
        />
      ) : (
        <ChoiceStep
          key={`${s.id}-alt`}
          intro={statement}
          prompt={s.altQuestion}
          options={s.alternatives}
          correctIndex={s.correctAlt}
          feedback={s.altExplanation}
          marker="letters"
          shuffleOptions
          nextLabel={last ? 'Finish Case →' : 'Next →'}
          onSolved={() => setDone((d) => d + 1)}
          onNext={() => {
            if (last) onComplete()
            else {
              setI(i + 1)
              setStage('yn')
            }
          }}
        />
      )}
    </LevelShell>
  )
}
