import React from 'react'

const Expertise = () => {
  return(
    <div className="container-fluid expertise">
      <div className="row expertise-content">
        <div className="col-md-12">
          <h1>Our Expertise</h1>
          <div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="expertise-card">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x circle-icon-background"></i>
                    <i className="fa fa-plane fa-stack-1x inside-icon"></i>
                  </span>
                  <h6>Executive Search</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut imperdiet dapibus metus et ultricies. Nulla facilisi. Vivamus 
                    scelerisque varius feugiat. In iaculis finibus leo, sed finibus ex. 
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="expertise-card">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x circle-icon-background"></i>
                    <i className="fa fa-gift fa-stack-1x inside-icon"></i>
                  </span>
                  <h6>Contingent Search</h6>
                  <p>
                    Fusce dapibus urna ut scelerisque suscipit. Maecenas arcu ex, 
                    auctor ut imperdiet eget, interdum a metus. Aliquam nec ex venenatis, ornare leo eu, 
                    hendrerit tellus. In nec turpis quis. 
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="expertise-card">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x circle-icon-background"></i>
                    <i className="fa fa-line-chart fa-stack-1x inside-icon"></i>
                  </span>
                  <h6>Contract/Interim</h6>
                  <p>
                    Proin iaculis imperdiet venenatis. Integer vitae ipsum elit. 
                    Aliquam ac ligula nec lectus maximus ultricies. Cras et quam blandit,
                    ultricies arcu ac, luctus elit. Praesent sem libero, efficitur ac vulputate vel.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="expertise-card">
                  <span className="fa-stack fa-4x">
                    <i className="fa fa-circle fa-stack-2x circle-icon-background"></i>
                    <i className="fa fa-delicious fa-stack-1x inside-icon"></i>
                  </span>
                  <h6>Staffing Services</h6>
                  <p>
                    Cras ut nisi malesuada, mollis mauris interdum, lacinia lacus. 
                    Nam gravida efficitur nibh eu vestibulum. 
                    Maecenas eu lorem in tellus laoreet eleifend. Aliquam a urna est.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise;