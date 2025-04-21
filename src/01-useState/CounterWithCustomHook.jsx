import { useCounter } from "./../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, incrementar, decrementar, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button onClick={ incrementar } className="btn btn-primary">+1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={ decrementar } className="btn btn-primary">-1</button>
        </>
    )
}
