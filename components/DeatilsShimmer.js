import React from 'react'
import './DetailShiimmer.css'
import { useStateData } from '../hooks/useData'
import { useTheme } from '../hooks/useData'
        
  

export default function DeatilsShimmer() {
  
    const [isdark]=useTheme()
  return (
    <div className={`shimmerDiv ${isdark?'dark':''}`}>
    <div className='ShimmerDetail'>
      <p></p>
      <div className='containerOfShim'>
      <div className='flagContainer'></div>
      <div className='tagesShimer'>
      <div>
      <h1></h1><h2></h2>
      <p></p>
      <p></p>
      <p></p>
      </div>
      <div><p></p>
      <p></p>
      <p></p>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}
