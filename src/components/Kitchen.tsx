import { CAKE_IMAGES, CAKE_SHIFT, IMG } from '../data/images'
import { kitchenMessages } from '../data/gameData'
import Confetti from './Confetti'

interface Props {
  solved: number // 0..3 solved cases = current cake state
  onStartCase: () => void
}

export default function Kitchen({ solved, onStartCase }: Props) {
  const cake = CAKE_IMAGES[solved]
  const finished = solved === 3
  const caseNo = String(solved + 1).padStart(2, '0')

  return (
    <div className="absolute inset-0">
      <img src={IMG.kitchen} alt="" className="absolute inset-0 h-full w-full object-cover" />

      {cake && (
        <div className="absolute bottom-[4.5cqw] left-[52cqw] w-[34cqw]" style={{ transform: `translateY(${CAKE_SHIFT[solved]}%)` }}>
          <img key={solved} src={cake} alt="Birthday cake" className="anim-pop block w-full" />
        </div>
      )}

      <img
        key={`kitten-${solved}`}
        src={solved === 0 ? IMG.kittenDetective : IMG.kittenHappy}
        alt="Detective kitten"
        className={`absolute bottom-[-1cqw] left-[-3cqw] h-[30cqw] ${solved > 0 ? 'anim-hop' : ''}`}
      />

      {finished ? (
        <>
          <img src={IMG.professor} alt="Professor Cat" className="anim-pop absolute bottom-[-1cqw] left-[29cqw] h-[28cqw]" style={{ animationDelay: '0.5s' }} />
          <Confetti />
          <div className="paper anim-pop absolute left-1/2 top-[2.5cqw] z-30 w-[58cqw] -translate-x-1/2 p-[2.2cqw] text-center" style={{ animationDelay: '0.3s' }}>
            <h1 className="font-story text-[4.4cqw] font-bold leading-tight text-[#2F5D46]">Happy Birthday, Professor Cat!</h1>
            <p className="mt-[0.8cqw] text-[2.1cqw] text-[#5A3A22]">Hooray! The mystery is solved and our cake is ready!</p>
            <p className="text-[2.1cqw] text-[#5A3A22]">Thank you for helping our little detective!</p>
            <p className="font-story mt-[0.8cqw] text-[3cqw] font-bold text-[#8A6A22]">We did it!</p>
          </div>
        </>
      ) : (
        <div key={solved} className="anim-pop absolute bottom-[5cqw] left-[31cqw] flex w-[22cqw] flex-col items-center gap-[1.2cqw]">
          <div className="paper w-full p-[1.4cqw] text-center">
            <p className="font-story text-[1.9cqw] font-bold leading-snug text-[#5A3A22]">{kitchenMessages[solved]}</p>
          </div>
          <button className="btn" onClick={onStartCase}>Start Case {caseNo}</button>
        </div>
      )}
    </div>
  )
}
