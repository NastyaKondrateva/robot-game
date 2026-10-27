import type { ReactNode } from 'react'

interface Props {
  label: string
  title: string
  subtitle: string
  unit: string
  total: number
  done: number
  children: ReactNode
}

export default function LevelShell({ label, title, subtitle, unit, total, done, children }: Props) {
  const pct = (done / total) * 100
  return (
    <div className="absolute inset-0 z-10 bg-[#EBDDB8] p-[1.4cqw]">
      <div className="paper flex h-full flex-col gap-[1.2cqw] p-[2cqw]">
        <header className="flex items-center justify-between gap-[2cqw]">
          <div className="flex items-center gap-[1.6cqw]">
            <span className="rounded-[0.8cqw] bg-[#C9A24B] px-[1.4cqw] py-[0.5cqw] text-[2cqw] font-extrabold text-[#3B2A14]">{label}</span>
            <div>
              <h1 className="font-story text-[3.4cqw] font-bold leading-none text-[#2F5D46]">{title}</h1>
              <p className="mt-[0.4cqw] text-[1.9cqw] italic text-[#7A4B2A]">{subtitle}</p>
            </div>
          </div>
          <p className="text-[2.2cqw] font-bold text-[#7A4B2A]">
            {unit} {Math.min(done + 1, total)} / {total}
          </p>
        </header>
        <div className="h-[1.5cqw] w-full overflow-hidden rounded-full bg-[#D9E2D0]">
          <div className="h-full rounded-full bg-[#2F5D46] transition-all duration-700 ease-out" style={{ width: `${pct}%` }} />
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-[1.2cqw]">{children}</div>
      </div>
    </div>
  )
}
