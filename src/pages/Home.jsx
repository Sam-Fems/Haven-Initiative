import React from 'react'
import Background from '../assets/haven.jpeg'

const Home = () => {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          A Place for <span className="text-blue-400">Uplifting</span>
        </h1>
      </div>
    </main>
  )
}

export default Home