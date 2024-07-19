import { Routes , Route , NavLink} from 'react-router-dom'
import Footer from './Footer';

// import React from 'react'

export default function About() {
    return (
        <div>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, placeat!</p>
            <NavLink to='footer'>Footer</NavLink>
            <Routes>
                <Route  path='footer' element={<Footer/>} />
            </Routes>
        </div>
    )
}
