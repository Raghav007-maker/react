import { useState } from 'react'


function App() {

  let [counter, setCounter] = useState(15) 

  // let counter = 5

  const addValue = () => {

    // preferred to be used for updation instaed of maunal way like above 
    setCounter(prev => (prev < 20) ? prev + 1 : prev)

    // if(counter < 20){
    //   counter++;
    //   setCounter(counter)
    // }
  }

  const removeValue = () => {
    setCounter(prev => (prev > 0) ? prev - 1 : prev)
    
    // if(counter > 0){
    //   counter--;
    //   setCounter(counter)
    // }
  }
  return (
    <>
    <h1>Chai Or React</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button><br />
    <button onClick={removeValue}>remove Value {counter}</button>
    </>
  )
}

export default App
