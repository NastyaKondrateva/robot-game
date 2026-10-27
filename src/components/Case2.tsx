import { useEffect, useState } from 'react'
import LevelShell from './LevelShell'
import { case2, caseMeta } from '../data/gameData'
import { shuffle } from '../lib/shuffle'

export default function Case2({ onComplete }: { onComplete: () => void }) {
  const [defs] = useState(() => shuffle(case2))
  const [matched, setMatched] = useState<string[]>([])
  const [selT, setSelT] = useState<string | null>(null)
  const [selD, setSelD] = useState<string | null>(null)
  const [flash, setFlash] = useState(false)
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null)
  const finished = matched.length === case2.length

  useEffect(() => {
    if (!finished) return
    const t = setTimeout(onComplete, 2200)
    return () => clearTimeout(t)
  }, [finished, onComplete])

  function pick(kind: 't' | 'd', id: string) {
    if (flash || finished || matched.includes(id)) return
    const t = kind === 't' ? id : selT
    const d = kind === 'd' ? id : selD
    setSelT(t)
    setSelD(d)
    setMsg(null)
    if (!t || !d) return
    if (t === d) {
      setMatched((m) => [...m, t])
      setSelT(null)
      setSelD(null)
      setMsg({ text: matched.length + 1 === case2.length ? 'Case solved!' : 'Clue matched!', ok: true })
    } else {
      setFlash(true)
      setMsg({ text: 'Not quite! Try again.', ok: false })
      setTimeout(() => {
        setFlash(false)
        setSelT(null)
        setSelD(null)
      }, 900)
    }
  }

  const cls = (id: string, selected: string | null) =>
    `opt flex-1 ${matched.includes(id) ? 'ok' : selected === id ? (flash ? 'bad' : 'sel') : ''}`

  return (
    <LevelShell {...caseMeta[2]} total={case2.length} done={matched.length}>
      <h2 className="font-story text-[2.6cqw] font-bold text-[#2F5D46]">Match each term with its meaning.</h2>
      <div className="flex min-h-0 flex-1 gap-[2cqw]">
        <div className="flex w-[27cqw] flex-col gap-[0.9cqw]">
          {case2.map((p) => (
            <button key={p.id} className={cls(p.id, selT)} disabled={matched.includes(p.id)} onClick={() => pick('t', p.id)}>
              <span className="font-story text-[2.4cqw]">{p.term}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-[0.9cqw]">
          {defs.map((p) => (
            <button key={p.id} className={cls(p.id, selD)} disabled={matched.includes(p.id)} onClick={() => pick('d', p.id)}>
              <span className="text-[1.8cqw]">{p.definition}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex min-h-[4.5cqw] items-center justify-center" aria-live="polite">
        {msg && (
          <p key={msg.text + matched.length} className={`anim-msg text-[2.6cqw] font-bold ${msg.ok ? 'text-[#2E7A4A]' : 'text-[#A8473F]'}`}>
            {msg.text}
          </p>
        )}
      </div>
    </LevelShell>
  )
}
