import React from 'react'
import useCounter from './useCounter'

export default function Counter() {

    const [number,increment,decrement,reset] = useCounter()

  return (
    <div>
        <h2>Number : {number}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
  )

}
