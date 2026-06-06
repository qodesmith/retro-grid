import {getRandomNumber} from '@qodestack/utils'
import {useMemo} from 'react'

import {Typer} from './Typer'
import {pct, px} from './utils'
import './App.scss'

const NUM_OF_STARS = 1500

// https://codepen.io/jackphilippi/pen/LjezQX
export function App() {
  const starsArray = useMemo(() => {
    return Array.from({length: NUM_OF_STARS}).map((_, i) => {
      /**
       * We want a random number between 1 and 100 but we want precision up to
       * 3 decimal places, not simply whole numbers. Hence the division by 1000.
       */
      const top = pct(getRandomNumber(0, 100_000) / 1000)
      const left = pct(getRandomNumber(0, 100_000) / 1000)

      const opacity =
        (getRandomNumber(0, 15)
          ? getRandomNumber(15, 30)
          : getRandomNumber(50, 100)) / 100
      const style: Record<string, string | number> = {left, top, opacity}

      if (opacity > 0.85 && !getRandomNumber(0, 2)) {
        style.width = px(3)
        style.height = px(3)
        style.boxShadow = 'white 0 0 10px,white 0 0 10px'
      } else if (getRandomNumber(0, 1)) {
        style.width = px(1)
        style.height = px(1)
      } else if (opacity > 0.75) {
        style.boxShadow =
          'white 0 0 10px,white 0 0 10px,white 0 0 10px,white 0 0 10px'
      }

      // biome-ignore lint/suspicious/noArrayIndexKey: it's ok here
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
