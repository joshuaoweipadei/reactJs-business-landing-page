import React from 'react'

const CeoSection = () => {

  const ceoImg = 'http://preview.hasthemes.com/consulen-v2/images/about/2.png'

  return(
    <div className="container-fluid ceo">
      <div className="row">
        <div className="col-md-6">
          <div className="ceo-img">
            <img src={ceoImg} alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ceo-text">
            <h4>Go ahead to create your own dream business</h4>
            <p>There are many variations of passag Lorem Ipsum, Maecenas eu lorem in tellus laoreet eleifend, but the majority majority There are many Lorem Ipsum, but the majority majority is high so we doneits carefully.</p>
            <p>Cras ut nisi malesuada, mollis mauris interdum, lacinia lacus. Nam gravida efficitur nibh eu vestibulum. </p>
            <h6>Herbert Lipo</h6>
            <p style={{fontWeight:"200"}}>CEO Of Business</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoSection;