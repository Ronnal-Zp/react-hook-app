import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr/>

      <input
        ref={inputRef}
        className="form-control"
        type="text" />

      <button onClick={onClick} className="btn btn-primary mt-2">
        Focus
      </button>
    </>
  )
}
