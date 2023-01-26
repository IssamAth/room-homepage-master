import React from 'react'
import Firsthalf from './components/firsthalf/Firsthalf'
import Secondhalf from './components/secondhalf/Secondhalf'

const App = () => {
    return (
        <div className='flex flex-col w-screen'>
            {/* SHOWCASE */}
            <Firsthalf />
            <Secondhalf />
        </div>
    )
}

export default App