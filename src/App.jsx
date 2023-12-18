import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/api/pets')
        setPets(data)
      } catch (error) {
        console.error('Error fetching pets:', error)
      }
    }
  
    fetchPets()
  }, [])

  return (
    <>
    {console.log(pets)}
    {pets.map((pet) => {
      return <h1 key={pet.id}>{pet.name}</h1>
    })}
    </>
  )
}

export default App
