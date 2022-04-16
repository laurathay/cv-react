import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/about/Services'
import Portfolio from './components/about/Portfolio'
import Testimonials from './components/about/Testimonials'
import Contact from './components/about/Contact'
import Footer from './components/about/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
