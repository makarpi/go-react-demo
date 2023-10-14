import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api")
      const data = await response.text()
      setData(data)
    }
    fetchData().catch((err) => console.log(err))
  }, []);

  return (
    <div className='App'>
      {data}
    </div>
  )
}

export default App
