import { useCounter, useFetch } from './../hooks'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHooks = () => {
  const { counter, incrementar, decrementar } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />
      { isLoading
        ? <LoadingMessage/>
        : (
            <PokemonCard
              id={counter}
              name={data.name}
              sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
              ]}/>
          )
      }

      <button onClick={counter > 1 ? () => decrementar() : null} className='btn btn-primary mt-2'>Anterior</button>
      <button onClick={() => incrementar()} className='btn btn-primary mt-2'>Siguiente</button>
    </>
  )
}


