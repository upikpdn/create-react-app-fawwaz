import './App.css';
import { getHeroList, searchHero } from "./api"
import { useEffect, useState } from "react"

const App = () => {
  const [heroes, setHeroes] = useState([])
  
  useEffect(() => {
    getHeroList().then((data) => {
      setHeroes(data)
    })
  }, [])

  const HeroList = () => {
    return heroes.map((hero, i) => {
      return (
        <div className="Hero-wrapper" key={i}>      
          <div className="Hero-name">{hero.name}</div>
          <br></br>
          <div className="Hero-birth">Tahun Lahir : {hero.birth_year}</div>
          <div className="Hero-death">Tahun Wafat : {hero.death_year}</div>
          <br></br>
          <div className="Hero-description">Deskripsi : {hero.description}</div>
          <br></br>
          <div className="Hero-ascension">Tahun Penyematan : {hero.ascension_year}</div>
        </div>
      )
    })
  }

  const search = async(q) => {
      const query = await searchHero(q)
      setHeroes(query)
}

  console.log({heroes: heroes})
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img className='pict' src='./pict.png'></img>
        </div>
        <input 
          placeholder='Cari Pahlawan ....' 
          className='Hero-search'
          list='data'
          onChange={({ target }) => search(target.value)}
        />
        <datalist id='data'>
          {
            heroes.map(results =>{
              return(
                <option >{results.name}</option>
              )
            })
          }
        </datalist>
        <div className="Hero-container">
            <HeroList/>
        </div>
      </header>
    </div>
  )
}

export default App;