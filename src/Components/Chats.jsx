import React from 'react'
import Photo from "../Images/photo.jpeg";

const Chats = () => {
  return (
    <div>
      <div className="flex flex-col min-w-full p-2">
      <div className="flex items-center justify-start p-1">
        <img
          src={Photo}
          alt="User"
          className="h-14 w-14 mx-3 rounded-full object-cover"
        />
        <div className="text-md font-medium">
          <div>Ikshit</div>
          <div className='text-sm font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Chats
