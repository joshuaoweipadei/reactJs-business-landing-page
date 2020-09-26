import React from 'react'

import html5 from '../../assets/svg/html5.svg'
import react from '../../assets/svg/react.svg'
import vue from '../../assets/svg/vue.svg'
import bootstrap from '../../assets/svg/bootstrap.svg'
import sass from '../../assets/svg/sass.svg'


const Features = () => {
  return(
    <div className="container-fluid feature">
      <div className="row">
        <div className="col-md-12">
          <div className="feature-content">
            <div className="img-content">
              <img src={html5} alt="html5"/>
            </div>
            <div className="img-content">
              <img src={react} alt="react"/>
            </div>
            <div className="img-content">
              <img src={vue} alt="vue"/>
            </div>
            <div className="img-content">
              <img src={bootstrap} alt="bootstrap"/>
            </div>
            <div className="img-content">
              <img src={sass} alt="sass"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;