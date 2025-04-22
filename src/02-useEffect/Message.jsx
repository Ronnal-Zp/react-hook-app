import { useEffect, useState } from "react";

export const Message = () => {
  const [coord, setCoord] = useState({x:0, y:0});

  const onMouseMove = ({x, y}) => {
    setCoord({x, y});
  }

  useEffect(() => {
    console.log('Message mounted!');
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      console.log('Message unmounted!');
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [])
  
  
  return (
    <>
        <h3>Coordenadas</h3>
        { JSON.stringify(coord) }
    </>
  )
}
