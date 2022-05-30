import React, { useState, useEffect } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
// import cardimg1 from './images/cardimg1.jpg'
// import cardimg2 from './images/cardimg2.jpg'
// import icon3 from './images/icon_profil_2.png'
// import icon2 from './images/icon_profil_2.png'
// import icon1 from './images/icon_profil_2.png'
import Slider from 'react-slick'
import Client from '../Client'

export default function SimilarSlider() {
  const [similarCards, setSimilarCards] = useState()

  useEffect(() => {
    Client.fetch(
      `*[_type == "similarCards"] {
      mainImage{
        asset ->{
          _id,
          url
        },
        alt, 
       },
       mainImage2{
        asset ->{
          _id,
          url
        },
        alt, 
       },
       mentor,
       title,
       duration,
       time,
       slug
    }`,
    )
      .then((data) => setSimilarCards(data))
      .catch(console.error)
  }, [])
  console.log(similarCards)
  return (
    <div>
      <div className="similar-sliders">
        <div className="st-heading">
          <h4 style={{ padding: '12.4px 10px' }}>Similar trainings</h4>
        </div>
        <Slider
          dots={false}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {similarCards &&
            similarCards.map((similarCards, index) => (
              <div
                key={index}
                className="card"
                style={{
                  width: '21rem',
                  display: 'block',
                  borderRadius: '25px',
                  border: '1px solid',
                }}
              >
                <div className="waiting-icon">
                  <BsFillCircleFill />
                </div>
                {similarCards.mainImage && similarCards.mainImage.asset && (
                  <img
                    src={similarCards.mainImage.asset.url}
                    className="card-img-top"
                    alt="..."
                    style={{
                      borderTopLeftRadius: '25px',
                      borderTopRightRadius: '25px',
                      maxHeight: '130px',
                    }}
                  />
                )}
                <div className="mentor">
                  {similarCards.mainImage2 && similarCards.mainImage2.asset && (
                    <img
                      src={similarCards.mainImage2.asset.url}
                      alt=""
                      className="mentor-img"
                    />
                  )}
                </div>
                <div className="mentor-name">
                  <span
                    className="mn"
                    style={{ paddingLeft: '35px', color: '#fff' }}
                  >
                    {similarCards.mentor}
                  </span>
                </div>
                <div className="card-body">
                  <p className="card-title">
                    <h3
                      style={{
                        fontSize: '20px',
                        color: '#d44a73',
                        marginTop: '20px',
                      }}
                    >
                      {similarCards.title}
                    </h3>
                  </p>
                  <div className="duration">
                    <div className="duration-time">
                      <b>{similarCards.duration}</b>{' '}
                      <span className="time">{similarCards.time}</span>
                    </div>
                    <div className="levels">
                      <div className="level-item">
                        <BsFillCircleFill />
                      </div>
                      <div className="level-items">
                        <BsFillCircleFill />
                        <BsFillCircleFill />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  )
}
