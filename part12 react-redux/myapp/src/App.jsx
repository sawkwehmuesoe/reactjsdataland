import { useState } from 'react'
import './App.css'
import { decrement, increment, incrementByAmount } from './store/reducer.js'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const count = useSelector(state => state.counter.value)

  const dispatch = useDispatch()

  return (
    <>
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>

          <span>{count}</span>

          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(100))}>Increment By Amount</button>
        </div>
      </div>
    </>
  )
}

export default App
