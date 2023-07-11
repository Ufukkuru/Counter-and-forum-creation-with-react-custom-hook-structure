import { useState } from 'react'

function useCounter() {
    const [number, setNumber] = useState(0)

    const increment = () =>{
        setNumber((next) => next + 1)
    }
    const decrement = () =>{
        setNumber((prev) => prev - 1)
    }
    const reset = () =>{
        setNumber((reset) => reset = 0)
    }
    return[number, increment,decrement, reset]
}

export default useCounter
