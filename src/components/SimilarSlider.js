import React, { useState, useEffect } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Client from '../Client'

export default function SimilarSlider() {
  const [similarCards, setSimilarCards] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    Client.fetch(
      `*[_type == "cards"] {
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
      .then((data) => {
        for (let index = 0; index < data.length; index++) {
          if (window.location.pathname.includes(data[index].slug.current) === true) {
            delete data[index]
            console.log(data);
            setSimilarCards(data)
          }
        }
      })
      .catch(console.error)

  }, [])




  return (
    <div>
      <div className="similar-sliders">
        <div className="st-heading">
            <h3 style={{ marginTop: "10px", marginBottom: "30px", borderBottom: "1px solid", color:"#9268A7" }}>Similar trainings</h3>
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
                  width: '22rem',
                  borderRadius: '5px',
                  border: '1px solid',
                }}
              >
                {console.log(window.location.pathname.includes(similarCards.slug.current))}
                <div className="waiting-icon">
                  <BsFillCircleFill />
                </div>
                {similarCards.mainImage && similarCards.mainImage.asset && (
                  <img
                    src={similarCards.mainImage.asset.url}
                    className="card-img-top"
                    alt="..."
                    style={{
                      borderTopLeftRadius: '5px',
                      borderTopRightRadius: '5px',
                      maxHeight: '180px',
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
                  <div className="card-title">
                    <Link
                      to={{ pathname: `/tarining-area/${similarCards.slug.current}` }}
                      style={{ textDecoration: 'none' }}

                    >
                      <h3
                        style={{
                          fontSize: '20px',
                          color: '#333333',
                          marginTop: '20px',
                          paddingBottom: "10px",
                          borderBottom: "2px solid",
                        }}
                      >
                        {similarCards.title}

                      </h3>
                    </Link>
                  </div>
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
