import { IMG } from '../data/images'

export default function Welcome({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0">
      <img src={IMG.kitchen} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#3A2A18]/25" />
      <img src={IMG.kittenDetective} alt="Detective kitten" className="anim-pop absolute bottom-0 left-[-4cqw] h-[40cqw]" />
      <div className="paper anim-pop absolute left-[39cqw] top-[4.5cqw] w-[56cqw] p-[3cqw]">
        <p className="mb-[1.6cqw] w-fit rounded-[0.6cqw] border-[0.25cqw] border-[#C9A24B] px-[1.2cqw] py-[0.4cqw] text-[1.6cqw] font-bold text-[#8A6A22]">
          CASE FILE: BIRTHDAY MYSTERY
        </p>
        <p className="font-story text-[2.4cqw] italic text-[#7A4B2A]">The Birthday Mystery</p>
        <h1 className="font-story mb-[1.8cqw] text-[4.6cqw] font-bold leading-[1.05] text-[#2F5D46]">A Cake for Professor Cat</h1>
        <div className="space-y-[1cqw] text-[2.2cqw] leading-[1.35] text-[#5A3A22]">
          <p className="font-bold">Today is Professor Cat's birthday!</p>
          <p>Our little detective wants to surprise him with a delicious cake. But the cake isn't ready yet!</p>
          <p>Help the kitten solve three mysterious cases and collect everything needed for the cake.</p>
        </div>
        <div className="mt-[2.4cqw]">
          <button className="btn" onClick={onStart}>Let's Solve the Mystery!</button>
        </div>
      </div>
    </div>
  )
}
