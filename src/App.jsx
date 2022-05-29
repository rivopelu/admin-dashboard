import React from 'react'
import { SideBarComp } from './components'

const App = () => {
    return (
        <div className='flex'>
            <SideBarComp />
            <div className="page p-7 flex-1 min-h-screen">Page</div>
        </div>
    )
}

export default App