import PokeBall from '../Resources/PokeBall.png'

function Loader() {
    return (
        <>
        <div className="loader">
            <img className='pokeball' src={PokeBall} alt="PokeBall" />
        </div>
        </>
    )
}

export default Loader;