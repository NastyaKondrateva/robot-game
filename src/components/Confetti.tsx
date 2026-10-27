import { useState } from 'react'

const COLORS = ['#C9A24B', '#2F5D46', '#E86A7A', '#7FA98A', '#7A4B2A', '#F4B6A8']

export default function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 46 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      dur: 4 + Math.random() * 3,
      size: 0.8 + Math.random() * 0.8,
      color: COLORS[i % COLORS.length],
      round: i % 3 === 0,
    })),
  )
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti"
          style={{
            left: `${p.left}%`,
            width: `${p.size}cqw`,
            height: `${p.size * 1.5}cqw`,
            background: p.color,
            borderRadius: p.round ? '50%' : '0.15cqw',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  )
}
