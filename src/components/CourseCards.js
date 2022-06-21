import React, { useState, useEffect } from 'react'
import Client from '../Client'
import { BsFillRecordFill } from 'react-icons/bs'
import { FcApproval } from 'react-icons/fc'
import './coursecard.css'
import { Link } from 'react-router-dom'

export default function CourseCards() {
  const [cards, setCards] = useState([])
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
       description,
       duration,
       time,
       slug
    }`,
    )
      .then((data) => setCards(data))
      .catch(console.error)
  }, [])
  console.log(cards)

  return (
    <div>
      <section>
        <div className="homeCards container">
          <div className="row">
            {cards &&
              cards.map((cards, index) => (
                <div
                  key={index}
                  className="card"
                >
                  {cards.mainImage && cards.mainImage.asset && (
                    <img
                      src={cards.mainImage.asset.url}
                      className="card-img-top"
                      alt="..."
                      style={{
                        maxHeight: '150px',
                        borderTopLeftRadius: '5px',
                        borderTopRightRadius: '5px',
                      }}
                    />
                  )}

                  <div className="active-icon">
                    <FcApproval size={30}/>
                  </div>
                  <div className="card-body position-relative">
                    {cards.mainImage && cards.mainImage.asset && (
                      <img
                        src={cards.mainImage2.asset.url}
                        alt=""
                        className="icon"
                      />
                    )}

                    <div className="tesla">
                      <span className="st">{cards.mentor}</span>
                    </div>
                    <Link
                      to={{ pathname: `/tarining-area/${cards.slug.current}` }}
                      style={{ textDecoration: 'none' }}
                    >
                      <h5 style={{ color: '#333333', marginTop: '20px', paddingBottom: "10px", borderBottom: "2px solid", }}>
                        {cards.title}
                      </h5>
                      <p
                        className="card-text"
                        style={{ fontSize: '14px', color: 'black' }}
                      >
                        {cards.description}
                      </p>
                    </Link>
                    <div className="duration" style={{ marginTop: '30px' }}>
                      <div className="duration-time">
                        <b>{cards.duration}</b>{' '}
                        <span className="time">{cards.time}</span>
                      </div>
                      <div className="levels">
                        <div className="level-item">
                          <BsFillRecordFill />
                        </div>
                        <div className="level-items">
                          {' '}
                          <BsFillRecordFill />
                          <BsFillRecordFill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}