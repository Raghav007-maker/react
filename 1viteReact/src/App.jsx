import { useState } from 'react'
import My from './my'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello</h1>
    <My />
    </>
  )
}

export default App
