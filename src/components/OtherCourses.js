import React from 'react'
import cardimg2 from './images/cardimg2.jpg'
import {BsFillCircleFill} from "react-icons/bs"
import {FaFacebookSquare, FaLinkedin, FaTwitterSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import icon3 from './images/icon_profil_2.png'
import './othercourses.css'

export default function OtherCourses() {
  return (
    <div>
      <section>
        <div className="container" style={{marginLeft:"-50px"}}>
          <div className="similar-sliders">
           <div className="st-heading">
              <h4 style={{padding:"12.4px 10px" }}>Similar trainings</h4>
            </div>
          <div className="card" style={{ width: '21rem',display:"block", margin:"15px auto", borderRadius:"25px", border:"1px solid", position:"relative" }}>
          <div className="waiting-icon">
              <BsFillCircleFill/>
            </div>
            <img src={cardimg2} className="card-img-top" alt="..." style={{borderTopLeftRadius:"25px", borderTopRightRadius:"25px", maxHeight:"130px"}}/>
            <div className="mentor">
              <img src={icon3} alt="" className='mentor-img'/>
            </div>
            <div className="mentor-name">
              <span className='mn' style={{paddingLeft:"35px", color:"#fff"}}>Jade Wayne</span>
            </div>
            <div className="card-body">
              <p className="card-title">
                <h3 style={{fontSize:"20px", color:"#d44a73", marginTop:"20px"}}>Social Media marketing and Analytics</h3>
              </p>
           <div className="duration">
              <div className="duration-time">
                <b>Duration</b>{' '}
                <span className="time">: 17 hours</span>
             
              </div>
             <div className="levels">
                <div className="level-item"><BsFillCircleFill/></div>
                  <div className="level-items">
                     <BsFillCircleFill/>
                    <BsFillCircleFill/>
                  </div>
            </div>
           </div>
            </div>
          </div>
          </div>
          <div className="container">
            <div className="share-area">
              <h3 style={{marginTop:"15px" , borderBottom:"2px solid"}}>Share this training</h3>
            </div>
            <div className="social-links" style={{marginTop:"-15px"}}>
                <a href="/" className='link-item'><FaFacebookSquare/></a>
                <a href="/" className='link-item'><FaLinkedin/></a>
                <a href="/" className='link-item'><FaTwitterSquare/></a>
                <a href="/" className='link-item'><MdEmail/></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
