import "./RandomPokemon.css"

export default function RandomPokemon  () {
    const randomNumber = Math.floor(Math.random() * 151) + 1
    return (
        <div className="RandomPokemons">
             <h1>Pokemon #{randomNumber}</h1>
             <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`} />
        </div>
    )
}

