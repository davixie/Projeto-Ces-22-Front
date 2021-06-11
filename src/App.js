import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Rodape } from './components/Rodape'
import Routes from './routes'
import './global.css'

function App() {
    const [dimension, setDimension] = useState({width: window.innerWidth})

    useEffect(() => {
        function resize(){
            setDimension({width: window.innerWidth})
        }

        window.addEventListener('resize', resize)
    }, [dimension.width])

    return (
        <div>
            <Header />
            <Routes />
            <Rodape />
        </div>
    );
}

export default App;
