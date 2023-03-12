import React from 'react'
import Drawers from '../../Components/Drawers'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'
import Items from '../../Components/Items/Items'
import Navbar from '../../Components/Navbar/Navbar'
import Table from '../../Components/Table/Table'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      {/* <Drawers/> */}
      <Items/>
      <Table/>
      <Footer/>
    </div>
  )
}

export default Home