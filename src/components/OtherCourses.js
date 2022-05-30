import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"
import './othercourses.css'
import SimilarSlider from './SimilarSlider'

export default function OtherCourses() {
  return (
    <div>
      <section>
        <div className="container" style={{ marginLeft: "-50px" }}>
          <SimilarSlider />
          <div className="container">
            <div className="share-area">
              <h3 style={{ marginTop: "15px", borderBottom: "2px solid" }}>Share this training</h3>
            </div>
            <div className="social-links" style={{ marginTop: "-15px" }}>
              {/* <a href="/" className='link-item' target="_blank" rel="noreferrer"><FaLinkedin /></a> */}
              <a href="https://www.facebook.com/100173285999843/posts/129509603066211" className='link-item' target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
              <a href="https://www.instagram.com/empowerwit2022/?igshid=YmMyMTA2M2Y" className='link-item' target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
              <a href="https://twitter.com/EWIT_Official?t=KGqw1IpsFT9DIGxgytg6qg&s=09" className='link-item' target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
              <a href="https://discord.com/invite/WwfnzEHx" className='link-item' target="_blank" rel="noreferrer"><BsDiscord /></a>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
