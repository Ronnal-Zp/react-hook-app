import React from 'react'

export const Small = React.memo(({ value }) => {

  console.log('Renderizar!!!');

  return (
    <small>{ value }</small>
  )
})
