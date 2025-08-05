import React from 'react'
import Background from '../assets/haven.jpeg'

const Home = () => {
  return (
    <main
      className="relative py-36 flex flex-col items-center justify-center"
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
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow">
          Welcome to Haven Initiative, where we empower and uplift individuals through community, support, and inspiration. Join us in making a positive impact and building a brighter future together.
        </p>
      </div>
    </main>
  )
}

export default Home