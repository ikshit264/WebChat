import React from 'react'
import Navbar from './Navbar'
import Chats from './Chats'
import Search from "./Search"

const Sidebar = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Chats />
    </div>
  )
}

export default Sidebar
