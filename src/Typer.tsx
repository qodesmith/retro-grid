import {useEffect, useRef} from 'react'
// @ts-expect-error this isn't a TS module (yet).
import typer from 'typer-js'
import 'typer-js/dist/typer.min.css'
import './typer.scss'

export default function Typer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = typer(ref.current).cursor({block: true, blink: 'hard'})
    typeMessage(t)

    return () => {
      t.kill()
      ref.current!.innerHTML = ''
    }
  }, [])

  return <div ref={ref} className="typer-target" />
}

function typeMessage(t: any) {
  t.line()
    .pause(1500)
    .continue('Initiating sequence...')
    .pause(1500)
    .line('Analyzing data...')
}
