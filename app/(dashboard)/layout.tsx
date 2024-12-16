import React from 'react'

const layout = ({children} :{children: React.ReactNode}) => {
  return (
    <div>
        <p>My Dashboard</p>
        {children}
    </div>
  )
}

export default layout