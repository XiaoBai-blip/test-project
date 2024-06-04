import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bai's website</h1>
      <button onClick={() => setCount(count+1)}>Click the counter</button> <br/>
      You've clicked {count} time(s)
    </>
  )
}

export default App
