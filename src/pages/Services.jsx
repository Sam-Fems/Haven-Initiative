import React from 'react'
import { BsPersonAdd, BsBookHalf, BsLightbulbFill, BsLightning, BsGraphUpArrow, BsLampFill } from 'react-icons/bs'

const services = [
  {
    name: 'Holistic Mentorship',
    desc: 'Guiding young people through every stage of personal growth—helping them understand who they are, refine their strengths, and step confidently into their life’s purpose.',
    icon: <BsPersonAdd />
  },
  {
    name: 'Talent Discovery & Nurturing',
    desc: 'Creating the right environment for hidden gifts to surface and flourish, providing tools, guidance, and opportunities for young talents to grow.',
    icon: <BsLightbulbFill />
  },
  {
    name: 'Academic Assistance',
    desc: 'Supporting students in their studies with resources, mentorship, and encouragement to help them excel academically and reach their full potential.',
    icon: <BsLightning />
  },
  {
    name: 'Book & Movie Recommendations',
    desc: 'Sharing inspiring books and films that expand the mind, shape character, and fuel creativity, all in line with our values and mission.',
    icon: <BsBookHalf />
  },
  {
    name: 'Faith-Based Growth',
    desc: 'Anchoring personal and professional development in strong spiritual values, fostering a deeper connection to faith as a guide for life decisions.',
    icon: <BsGraphUpArrow />
  },
  {
    name: 'Soft and Life Skills Building',
    desc: 'Equipping young people with essential communication, leadership, and problem-solving skills to thrive in every sphere of life.',
    icon: <BsLampFill />
  }
]

const Services = () => {
  return (
    <section id='services' className='bg-[#101828] min-h-screen flex-grow px-8 py-6 mx-auto pt-15'>
      <div className="text-center">
        <h2 className="text-5xl max-sm:text-3xl text-blue-500 font-bold inline-block">
          What We Offer
        </h2>
        <div className="flex items-center justify-center mt-3 w-64 mx-auto">
          <div className="h-[2px] bg-blue-800 flex-1 max-w-[80px]"></div>
          <div className="w-4 h-4 bg-blue-800 rounded-full mx-2"></div>
          <div className="h-[2px] bg-blue-800 flex-1 max-w-[80px]"></div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 mt-5 sm:grid-cols-2 gap-4'>
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-gray-800 shadow-md rounded-2xl transition duration-200 hover:shadow-xl"
          >
            <div className="mb-2 text-blue-500 text-5xl">{service.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-center text-blue-500 uppercase">{service.name}</h3>
            <p className="text-sm text-center text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services