import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (initialValue = 100) => {

  for (let i = 0; i < initialValue; i++) {
    console.log('Procesando...');
  }

  return `${ initialValue } iteracion realizadas.`;
}


export const MemoHook = () => {

  const { counter, incrementar, decrementar } = useCounter(2000);
  const [show, setshow] = useState(false)

  const valueMemorized = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Memorize</h1>
      <h3>Counter: <small>{ counter }</small></h3>
      <p>{ valueMemorized }</p>

      <button onClick={incrementar} className="btn btn-primary">
        +1
      </button>

      <button onClick={decrementar} className="btn btn-primary">
        -1
      </button>

      <button onClick={() => setshow( !show )} className="btn btn-primary">Show/Hide</button>

      <pre>
        { JSON.stringify(show)}
      </pre>
    </>
  )
}
