import React from 'react'
import { createRoot } from 'react-dom/client'
 
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1>customApp</h1>
    </div>
  )
}

// let reactElement = {
//     type:'a',
//     props:{
//         href: 'http://www.google.com',
//         target:'_blank'
//     },
//     Children:'Hey How Are You..?'
// }

const anotherElement = (
  <a href='https://www.google.com' target ="_black">Visit google</a>
)

// we can not render the reactElement directly like anotherElement as the argumeents which we have used in reactElement Object is not matching with the arguments used in the render function also in custom react folder we can able to do it because we have created the reactElement so we know the arguments inside it but in main react we don,t

// so now lets check what arguments are used in render function and create one by using the properties defined in react
 
const name = "Hello World"

// how the variable got injected in DOMelem

const reactElement = React.createElement(
  'a', {href : "http://www.google.com", target : '_blank'}, 'click here',
  name
)
 

createRoot(document.getElementById('root')).render(
    reactElement
) 
