import React from 'react'

const LatestNews = () => {
  const news = [
    {
      id: 1,
      name: 'william Chester',
      image: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg?w=1155&h=1541',
      date: '1 January, 2020'
    },
    {
      id: 2,
      name: 'josh Oweipadei',
      image: 'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      date: '26 September, 2020'
    },
    {
      id: 3,
      name: 'Herbert Swope',
      image: 'https://images.newscientist.com/wp-content/uploads/2019/06/13111643/gettyimages-485057010.jpg',
      date: '31 December, 2020'
    },
  ]

  let newsLetter = news && news.map((item) => {
    return(
      <div className="col-lg-4 col-md-6" key={item.id}>
        <div className="latest-news-content">
          <div className="img-content">
            <img src={item.image} alt=""/>
          </div>
          <div className="text-content">
            <div className="name-and-time">
              <span>
                <i className="fa fa-user"></i> {item.name}
              </span>
              <span>
                <i className="fa fa-calendar"></i> {item.date}
              </span>
            </div>
            <h4><a href="#">LOREM IPSUM IS SIMPLY DUMMY</a></h4>
            <a href="#" className="read-more">Read more <i className="fa fa-angle-double-right"></i></a>
          </div>
        </div>
      </div>
    )
  });

  return(
    <div className="container-fluid latest-news">
      <div className="row">
        <div className="col-md-12">
          <h1 className="title">Latest News</h1>
        </div>
      </div>
      <div className="row">
        {newsLetter}
      </div>
    </div>
  )
}

export default LatestNews;