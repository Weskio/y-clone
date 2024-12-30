import React from 'react'
import Ping from './Ping'

const View = ({views}: {views:number}) => {
  return (
    <div className='view-container'>
        <div className="absolute -top-2 -right-2">
            <Ping/>
        </div>

        <p className="view-text">
            <span className="font-black">{views} views</span>
        </p>
    </div>
  )
}

export default View