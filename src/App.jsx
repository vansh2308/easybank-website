import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Features from './components/Features'
import Articles from './components/Articles'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-w h-screen w-screen min-h-fit'>
     <Navbar />
     <Landing />
     <Features />
     <Articles />
     <Footer />

      
    </div>
  )
}

export default App
