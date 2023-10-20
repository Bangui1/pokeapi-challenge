import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PokemonHome from './PokemonHome/PokemonHome'
import PokemonProfile from 'PokemonProfile/PokemonProfile'


function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PokemonHome/>}/>
            <Route path='/:id' element={<PokemonProfile/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App