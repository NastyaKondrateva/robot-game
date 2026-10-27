import { useState } from 'react'
import type { ReactNode } from 'react'
import { shuffle } from '../lib/shuffle'

interface Props {
  intro?: ReactNode
  prompt: string
  options: string[]
  correctIndex: number
  feedback: string
  nextLabel: string
  onNext: () => void
  onSolved?: () => void
  layout?: 'row' | 'col'
  marker?: 'letters' | 'numbers' | 'none'
  shuffleOptions?: boolean
}

/** One question with several options: wrong picks turn red, the right pick turns green and reveals "Next". */
export default function ChoiceStep({
  intro, prompt, options, correctIndex, feedback, nextLabel, onNext, onSolved,
  layout = 'col', marker = 'none', shuffleOptions = false,
}: Props) {
  const [order] = useState(() => {
    const ids = options.map((_, i) => i)
    return shuffleOptions ? shuffle(ids) : ids
  })
  const [wrong, setWrong] = useState<number[]>([])
  const [solved, setSolved] = useState(false)

  function pick(idx: number) {
    if (solved || wrong.includes(idx)) return
    if (idx === correctIndex) {
      setSolved(true)
      onSolved?.()
    } else {
      setWrong((w) => [...w, idx])
    }
  }

  return (
    <>
      {intro}
      <h2 className="font-story text-[2.8cqw] font-bold text-[#2F5D46]">{prompt}</h2>
      <div className={layout === 'row' ? 'flex gap-[2cqw]' : 'flex flex-col gap-[1cqw]'}>
        {order.map((idx, pos) => {
          const state = solved && idx === correctIndex ? 'ok' : wrong.includes(idx) ? 'bad' : solved ? 'dim' : ''
          return (
            <button
              key={idx}
              className={`opt ${layout === 'row' ? 'opt-lg' : ''} ${state}`}
              disabled={solved || wrong.includes(idx)}
              onClick={() => pick(idx)}
            >
              {marker !== 'none' && (
                <span className="badge">{marker === 'letters' ? String.fromCharCode(65 + pos) : pos + 1}</span>
              )}
              <span>{options[idx]}</span>
            </button>
          )
        })}
      </div>
      <div className="mt-auto flex min-h-[5.5cqw] items-center justify-between gap-[2cqw]" aria-live="polite">
        {solved ? (
          <p key="ok" className="anim-msg text-[2.2cqw] font-bold text-[#2E7A4A]">
            Correct! <span className="font-semibold text-[#5A3A22]">{feedback}</span>
          </p>
        ) : wrong.length > 0 ? (
          <p key={wrong.length} className="anim-msg text-[2.4cqw] font-bold text-[#A8473F]">Not quite! Try again.</p>
        ) : (
          <span />
        )}
        {solved && <button className="btn anim-msg" onClick={onNext}>{nextLabel}</button>}
      </div>
    </>
  )
}
