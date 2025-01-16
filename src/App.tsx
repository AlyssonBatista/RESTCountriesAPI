import { useState } from 'react'
import './App.css'
import { Button, Stack } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)
function somar(a:number,b:number){
  return a+b
}
  console.log(somar(34,23))

  return (
    <>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      </Stack>
    </>
  )
}

export default App
