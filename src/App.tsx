import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Todo erstellen
      Todo eingeben 
      nach Datum sortieren
      nach wichtigkeit sortieren
      man kann auch ältere todos anschauen
      wenn erledigt anklicken
      wenn nicht erledigt, dann rot anzeigen
      Entweder in Datenbank speichern oder in session store

     
    </>
  )
}

export default App
