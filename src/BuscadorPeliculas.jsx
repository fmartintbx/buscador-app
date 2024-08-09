import { useState } from "react"


export default function BuscadorPeliculas() {
  
  const urlBase= 'http:'

  const [busqueda, setBusqueda] = useState('')
  const [peliculas, setPeliculas] = useState([])
  
  const handleInputChange = (e) => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPeliculas()
  }
  const fetchPeliculas = async() => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${busqueda}`)
      const data = await response.json()
      setPeliculas(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador de Peliculas</h1>
      <form onSubmit={handleSubmit}> 
        <input type="text"
        placeholder="Escribi una peliicula" 
        value={busqueda}
        onChange={handleInputChange}
        
        />
       <button type= "submit"  className="search-button">Buscar</button>
      </form>
    </div>
  )
}
