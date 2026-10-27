import { useState } from 'react'
import LevelShell from './LevelShell'
import ChoiceStep from './ChoiceStep'
import { case3, caseMeta } from '../data/gameData'

export default function Case3({ onComplete }: { onComplete: () => void }) {
  const [i, setI] = useState(0)
  const [done, setDone] = useState(0)
  const t = case3[i]
  const last = i === case3.length - 1

  return (
    <LevelShell {...caseMeta[3]} total={case3.length} done={done}>
      <ChoiceStep
        key={t.id}
        intro={
          <p className="w-fit rounded-[0.8cqw] bg-[#F4E7C8] px-[1.6cqw] py-[0.6cqw] font-story text-[2.2cqw] font-bold text-[#7A4B2A]">
            AI Investigation Report
          </p>
        }
        prompt="Which statement is the AI's mistake?"
        options={t.statements}
        correctIndex={t.errorIndex}
        feedback={t.explanation}
        marker="numbers"
        nextLabel={last ? 'Finish Case →' : 'Next →'}
        onSolved={() => setDone((d) => d + 1)}
        onNext={() => (last ? onComplete() : setI(i + 1))}
      />
    </LevelShell>
  )
}
