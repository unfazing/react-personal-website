import React from 'react'
import CV from '../../assets/cv.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        {/* import the cv pdf above then href it with a download attribute to make downloadable cv button */}
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA