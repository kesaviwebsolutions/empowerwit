import React, { useState, useEffect } from 'react'
import NavTraining from './NavTraining'
import { BsFillCircleFill } from 'react-icons/bs'
import { FcApproval } from 'react-icons/fc'
import './training.css'
import OtherCourses from './OtherCourses'
import { useParams } from 'react-router-dom'
import Client from '../Client'

export default function Trainings() {
  const [cardContent, setCardContent] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    Client.fetch(
      `*[slug.current == "${slug}"] {
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
       link,
       mentor,
       title,
       description,
       duration,
       time,
       slug
      }`,
    )
      .then((data) => setCardContent(data[0]))
      .catch(console.error)
  }, [slug])
  console.log(cardContent)
  return (
    <div>
      <NavTraining />
      <section>
        <div className="container">
          <div
            className="training-area"
            style={{ backgroundColor: '#ffffff'}}>
            <div className="row">
              <div className="col-md-8">
                <div className="content-area"
                  style={{ backgroundColor: '#f2c8d57f'}}>{/* test color #F2C8D5*/}
                  <div className="img-text">
                    <div className="imgimg">
                      {cardContent.mainImage2 &&
                        cardContent.mainImage2.asset && (
                          <img
                            src={cardContent.mainImage2.asset.url}
                            alt=""
                            className="ii"
                          />
                        )}
                    </div>
                    <div className="ST">
                      <span className="sst">{cardContent.mentor}</span>
                      <span
                        className="available"
                        style={{
                          fontSize: '20px',
                          color: '#8bc34a',
                          float: 'right',
                          paddingRight: '10px',
                        }}
                      >
                        Session available{' '}
                        <FcApproval size={30}/>
                      </span>
                    </div>
                  </div>
                  <div className="intro">
                    <h3 className="tt">{cardContent.title}</h3>
                  </div>
                  <div
                    className="container"
                    style={{ borderBottom: '1px solid' }}
                  >
                    <div className="col-md-12">
                      <div className="tac">
                        <div className="content">
                          <p className='cc-d'>{cardContent.description}</p>
                        </div>
                        <div className="video-area">
                          <iframe
                            src={`https://www.youtube.com/embed/${cardContent.link}`}
                            frameBorder="0"
                            title="video"
                            className="video"
                          ></iframe>
                        </div>
                      </div>
                      <div className="lang" style={{ marginTop: '30px' }}>
                        <b>{cardContent.language}</b>{' '}
                        <span>{cardContent.langName}</span>
                      </div>
                      <div className="estimate">
                        <div className="ed">
                          {' '}
                          <b>{cardContent.duration}</b>{' '}
                          <span>{ cardContent.time}</span>
                        </div>
                        <div className="levels">
                          <div className="level-item">
                            <b style={{ color: '#000000' }}>Level</b>{' '}
                            <BsFillCircleFill size={25} color="#fed3b2" />
                          </div>
                          <div className="level-items">
                            <BsFillCircleFill size={25} color="#ccccc" />
                            <BsFillCircleFill size={25} color="#ccccc" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button-area">
                    <button
                      className="enroll"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4" /*  Other courses panel */
                style={{
                  backgroundColor: '#ffffff',
                  borderStyle: 'solid',
                  borderColor: '#333333',
                  borderWidth: '2px',
                  borderRadius: '10px'}}>
                <OtherCourses />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
