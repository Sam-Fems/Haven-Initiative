import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
  const texts = [
    `About Haven Initiative
Where your candle meets the burning flame.
Haven Initiative is a transformative mentorship movement created to help young people discover who they are, build what they can become, and step confidently into purpose.
We exist because too many teenagers carry gifts that never meet the right environment, mentorship, or opportunity. At Haven, we provide that environment: a safe, structured, faith-anchored space where talent is discovered, character is formed, and action is taken.`,

    `Our Why
We believe every young person is a light — a candle — with potential to illuminate homes, schools, and communities. But light needs a flame.
Haven is the match, the place, and the people who bring steady heat: practical training, spiritual encouragement, academic support, and real-world exposure. We prepare young people not just to succeed, but to lead with humility, courage, and clarity.`,

    `Founders & Leadership
Boluwatife — Co-founder and program visionary — started Haven from a place of personal mentorship experience and a conviction that young people deserve intentional, sustained investment.
Her heart for young people, emphasis on identity and purpose, and skills in program design are the backbone of Haven’s approach.`,

    `Isabella — Co-founder (age 16) 
    Brings youthful insight, peer perspective, and creative energy to the Initiative.
As a young co-founder, Isabella ensures our programs remain relevant, relatable, and responsive to the needs of today’s teens.
Together, Boluwatife and Isabella lead Haven with a combination of wise strategy and lived peer experience.`,

    `Mission & Vision
Mission: To mentor, equip, and mobilize teenagers to grow in character, competence, and calling — academically, creatively, spiritually, and socially.
Vision: A generation of confident, skilled, and purpose-driven young leaders who influence their communities with integrity and excellence.`,

    `What We Do — Three Pillars of Impact
Haven operates across three integrated pillars: Discovery, Development, Deployment.
Discovery: Guided assessments, one-on-one conversations, talent labs, and reflective sessions help mentees understand their gifts, passions, personality, and direction.`,

    `Development
    Once gifts are identified, we train. This involves targeted academic support, soft-skills workshops (communication, public speaking, leadership), creative mentorship (art, writing, music), STEM and vocational exposure, and faith and character formation.
Classes are structured, interactive, and include icebreakers, short assessments, and accountability routines.`,

    `Deployment
    Learning must be lived. Mentees create and present projects, run community volunteer activities in partnership with Seedtime Foundation, and mentor younger peers.
Each cohort ends with a showcase where mentees present a project — creative, academic, entrepreneurial, or service-based — demonstrating growth and maturity.`,

    `Program Structure & Features
Haven runs a year-long structured pathway made up of four phases, each with specific goals, activities, and assessments.
Every mentee completes seven core courses (Psychology, Language, Potentials, Soft Skills, Academic, STEM, Relationship) and participates in team-based mentorship pods.`,

    `Key Program Features
- Weekly sessions (online with occasional physical meetups)
- Book clubs and movie reflections
- Regular assessments and a final project showcase
- Mandatory volunteer service to build civic responsibility
- Extra academic clinics for exam preparation
- Pathways for graduates to become mentors`,

    `Values That Guide Us
Faith: Everything we do is underpinned by spiritual formation and reliance on God.
Integrity: We act with honesty, accountability, and excellence.
Service: We measure success by our ability to serve others.
Community: Growth happens best in warm, disciplined relationships.
Creativity & Innovation: We equip young people to think imaginatively and solve problems.`,

    `Who We Serve
We welcome teenagers aged roughly 8–16 (and recent high-school graduates in leadership or mentoring tracks) from diverse backgrounds.
We intentionally recruit mentees who demonstrate curiosity, teachability, and a desire to serve.
Selection combines application screening, short interviews, and dedication indicators — we choose those ready to commit to the process.`,

    `Outcomes & Impact
Haven measures success in changed lives: improved academic confidence, newly discovered talents, stronger emotional health, leadership in community projects, and increased spiritual maturity.
Our mentees graduate with a portfolio — books they’ve reviewed, projects they’ve completed, and habits that prepare them for school, work, and service.`,

    `Looking Ahead
We plan to expand our geographic reach, develop scholarship and micro-grant opportunities, and establish a physical Haven Center — a safe, resource-rich hub for workshops, study, and creative production.
Our long-term dream is to raise thousands of young leaders who reproduce the same gift of mentorship in their communities.`,

    `Get Involved
If you want to partner, mentor, sponsor, or join the movement, contact us at: HavenIMgoal@gmail.com.
Join us in creating a space where a candle meets a burning flame — where potential is found, refined, and released.`
  ]

  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % texts.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + texts.length) % texts.length)
  }

  // Split first line as heading
  const formatText = (text) => {
    const [title, ...rest] = text.split('\n')
    return (
      <div>
        <h4 className="text-2xl font-bold text-blue-400 mb-3 uppercase">{title}</h4>
        <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{rest.join('\n')}</p>
      </div>
    )
  }

  return (
    <section id='about' className='bg-[#101828] pt-[10%] text-gray-400'>
      <div className='text-center'>
        <h3 className='text-center text-5xl max-sm:text-3xl text-blue-500 font-bold'>About Us</h3>
        <div className="flex items-center justify-center mt-3 mb-5 w-64 mx-auto">
          <div className="h-[2px] bg-blue-800 flex-1 max-w-[80px]"></div>
          <div className="w-4 h-4 bg-blue-800 rounded-full mx-2"></div>
          <div className="h-[2px] bg-blue-800 flex-1 max-w-[80px]"></div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-lg'>
        <div className='relative w-full max-w-3xl min-h-[250px] flex items-center justify-center'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full text-center'
            >
              {formatText(texts[index])}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className='flex gap-4 mt-6'>
          <button
            onClick={prevSlide}
            className='px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition'>
            Prev
          </button>
          <button
            onClick={nextSlide}
            className='px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition'>
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
