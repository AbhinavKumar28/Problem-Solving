import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'
function App() {
  const [bestscore, setBestscore] = useState(0)
  const [pklist, setPklist] = useState([])
  const [uniquecode, setUniquecode] = useState([])
  const score = uniquecode.length
  useEffect(() => {
    async function getPokemonData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await response.json();
      const pokemonPromises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const pokeData = await res.json();
        return {
          id: pokeData.id,
          name: pokeData.name,
          image: pokeData.sprites.front_default
        };
      });
      const pokemonList = await Promise.all(pokemonPromises);
      setPklist(pokemonList)
      // console.log(pokemonList)
      return pokemonList;
    }
    getPokemonData()
  }, [])
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const handleCardClick = (k) => {
    if (uniquecode.includes(k)){
      if (bestscore<score){
        setBestscore(score)
      }
      let tempArray = [...pklist]
      shuffleArray(tempArray)
      setPklist(tempArray)
      setUniquecode([])
    }else{
      let tempArray = [...pklist]
      shuffleArray(tempArray)
      setPklist(tempArray)
      setUniquecode([...uniquecode,k])
    }
  }
  const renderCards = () => {
    const pokeCards = pklist.map(pokeData => (
      <div onClick={()=>{handleCardClick(pokeData.id)}} key={pokeData.id}>
        <Card 
        // id = {pokeData.id}
        name= {pokeData.name}
        image={pokeData.image} />
      </div>
    ))
    return pokeCards
  }
  return (
    <>
      <h1>Pokemon Memory Game</h1>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <h4>Score:{score}</h4>
      <h4>Best Score:{bestscore}</h4>
      <div className='gr'>
        {renderCards()}
      </div>
    </>
  )
}

export default App
