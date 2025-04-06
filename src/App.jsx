import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>👋</h1>
        <p>This website is a work in progress and 
          I'm rebuilding it from the ground up, using some of the tools that have caught my eye recently</p> 
         <p><code className="standout-code">React, Tailwind, Vite and, maybe, Astro</code></p>
      </div>
      <div>
        <p>In the meanwhile, you can view some of my past work <a 
          className="standout-link"
          href='https://github.com/charlesmartinreed'
          target='blank'
          rel='noopener noreferrer'
          >
             over here
          </a>
        </p>
        <p>See you soon. </p>
        <p className='standout-text'>-- Charles</p>
      </div>
    </>
  )
}

export default App
