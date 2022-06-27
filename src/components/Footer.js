import React from 'react'
import img9 from './images/img9.png'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'

export default function Footer() {
  return (
    <div>
      <div className="footer-area">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={img9} alt="" className="fl" />
          </div>
          <hr className="hr" />
          <div className="footer-links">
            <div className="footer-link-items">
              <ul className="footer-link-item">
                <li className="LI">HOME</li>
                <li className="LI">TRAINING HUB</li>
                <li className="LI">WHITEPAPER</li>
                <li className="LI">PARTNERSHIPS</li>
              </ul>
            </div>
          </div>
          <div className="footer-social-links">
            <div className="footer-social-link-items">
              <a
                href="https://www.linkedin.com/company/81906962/admin"
                className="footer-social-link-item"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/100173285999843/posts/129509603066211"
                className="footer-social-link-item"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/empowerwit2022/?igshid=YmMyMTA2M2Y"
                className="footer-social-link-item"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://twitter.com/EWIT_Official?t=KGqw1IpsFT9DIGxgytg6qg&s=09"
                className="footer-social-link-item"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://discord.com/invite/WwfnzEHx"
                className="footer-social-link-item"
                target="_blank"
                rel="noreferrer"
              >
                <BsDiscord />
              </a>
            </div>
          </div>
          <div className="contact-details text-center my-3">
            <div className="details" style={{ fontSize: '17px' }}>
              <span
                className="more-info text-light"
                style={{ lineHeight: '40px' }}
              >
                More Info: +919990964432 / +918368015441 <br />
              </span>{' '}
              <span className="timings text-light">
                Timings: 10:00 AM - 8:00 PM
              </span>
              <br />
              <span className="info-contact text-light" style={{ lineHeight: '40px' }}>
                email: ewitofficial@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
