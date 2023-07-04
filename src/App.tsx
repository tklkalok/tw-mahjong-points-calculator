import { useState, useEffect } from 'react'
import './App.css'
import PointCalculator from './helper/PointCalculator'

function App() {
  let pointCalculator: PointCalculator;

  useEffect(() => {
    pointCalculator = new PointCalculator();
  }, []);

  return (
    <>
      Hello World
    </>
  )
}

export default App
