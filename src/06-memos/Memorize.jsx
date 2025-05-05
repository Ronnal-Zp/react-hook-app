import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from './Small';

export const Memorize = () => {

  const { counter, incrementar, decrementar } =useCounter(5);
  const [show, setshow] = useState(false)

  return (
    <>
      <h1>Memorize</h1>
      <h3>Counter: <Small value={counter} /></h3>

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
