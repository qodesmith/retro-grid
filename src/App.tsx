import {useMemo} from 'react'
import Typer from './Typer'
import {pct, px, randomNum} from './utils'
import './App.scss'

const NUM_OF_STARS = 1500

// https://codepen.io/jackphilippi/pen/LjezQX
export default function App() {
  const starsArray = useMemo(() => {
    return Array.from({length: NUM_OF_STARS}).map((_, i) => {
      const top = pct(randomNum(0, 100_000) / 1000)
      const left = pct(randomNum(0, 100_000) / 1000)
      const opacity =
        (randomNum(0, 15) ? randomNum(15, 30) : randomNum(50, 100)) / 100
      const style: Record<string, string | number> = {left, top, opacity}

      if (opacity > 0.85 && !randomNum(0, 2)) {
        style.width = px(3)
        style.height = px(3)
        style.boxShadow = 'white 0 0 10px,white 0 0 10px'
      } else if (randomNum(0, 1)) {
        style.width = px(1)
        style.height = px(1)
      } else if (opacity > 0.75) {
        style.boxShadow =
          'white 0 0 10px,white 0 0 10px,white 0 0 10px,white 0 0 10px'
      }

      return <div key={i} className="star" style={style} />
    })
  }, [])

  return (
    <>
      <div className="stars">{starsArray}</div>
      <div className="sunrise" />
      <div className="retro-grid-container">
        <div className="retro-grid-distance" />
        <div className="retro-grid retro-grid-left" />
        <div className="retro-grid" />
        <div className="retro-grid retro-grid-right" />
      </div>
      <Typer />
    </>
  )
}
