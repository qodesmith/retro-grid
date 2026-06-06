import {useEffect, useRef} from 'react'
// @ts-expect-error this isn't a TS module (yet).
import typer from 'typer-js'
import 'typer-js/dist/typer.min.css'
import './typer.scss'

export function Typer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = typer(ref.current).cursor({block: true, blink: 'hard'})
    typeMessage(t)

    return () => {
      t.kill()

      if (ref.current) {
        ref.current.innerHTML = ''
      }
    }
  }, [])

  return <div ref={ref} className="typer-target" />
}

// biome-ignore lint/suspicious/noExplicitAny: Typer.js doesn't have TS types (yet)
function typeMessage(t: any) {
  t.line()
    .pause(1500)
    .continue('Initiating sequence...')
    .pause(1500)
    .line('Analyzing data...')
}
