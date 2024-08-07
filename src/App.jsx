import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Functionalcomponent from './components/functional-components'
import Productlist from './components/products'


const dummyItem = ["Product 1", "Product 2", "Product 3"];


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>React JS</h1>
      {/* <Functionalcomponent/> */}

      <Productlist dummyItem = {dummyItem} name = "Langer" />
    </div>
  )
}

export default App
