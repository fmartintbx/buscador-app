import { useState } from "react"


export default function BuscadorPeliculas() {
  
  const [busqueda, setBusqueda] = useState('')
  
  const handleInputChange = (e) => {
    setBusqueda(e.target.value)
  }
  return (
    <div className="container">
      <h1 className="title">Buscador de Peliculas</h1>
      <form> 
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
