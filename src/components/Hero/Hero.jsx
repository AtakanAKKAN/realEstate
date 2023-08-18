import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='tabs'>
        <input type="radio" className='tabs-radio' name='tabs-group' id="tab1" checked/>
        <label htmlFor="tab1" className='tabs-label'>Tab#1</label>
        <div className='tabs-content'>
            CONTENT FOR TAB #1
        </div>
        <input type="radio" className='tabs-radio' name='tabs-group' id="tab2" />
        <label htmlFor="tab2" className='tabs-label'>Tab#2</label>
        <div className='tabs-content'>
            CONTENT FOR TAB #2
        </div>
        <input type="radio" className='tabs-radio' name='tabs-group' id="tab3" />
        <label htmlFor="tab3" className='tabs-label'>Tab#2</label>
        <div className='tabs-content'>
            CONTENT FOR TAB #3
        </div>
    </div>
  )
}

export default Hero