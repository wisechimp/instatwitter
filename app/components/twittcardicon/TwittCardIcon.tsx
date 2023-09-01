import React, { ReactNode } from 'react'
import { IconType } from "react-icons"

interface InteractiveIconProps {
  Icon: React.ElementType
}

const InteractiveIcon = ({ Icon }: InteractiveIconProps) => {
  return (
    <div className='rounded-full hover:bg-white/30 p-2 cursor-pointer transition duration-200'>
      <Icon />
    </div>
  )
}

export default InteractiveIcon