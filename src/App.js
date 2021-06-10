import React, { useEffect, useState } from 'react'
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
            <Routes />
        </div>
    );
}

export default App;
