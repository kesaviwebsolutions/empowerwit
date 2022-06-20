import React from 'react'
import img9 from './images/img9.png'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import './homefooter.css'

export default function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="footer-logo">
        <img src={img9} alt="" className="fl" />
      </div>
      <hr style={{ color: '#d44a73' }} />
      <div className="home-footer-links">
        <ul className="home-footer-link">
          <li className="HLI">HOME</li>
          <li className="HLI">TRAINING HUB</li>
          <li className="HLI">WHITEPAPER</li>
          <li className="HLI">PARTNERSHIPS</li>
        </ul>
      </div>
      <div className="home-footer-social-links">
        <div className="home-footer-social-link-items">
          <a
            href="https://www.linkedin.com/company/81906962/admin"
            className="home-footer-social-link-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/100173285999843/posts/129509603066211"
            className="home-footer-social-link-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/empowerwit2022/?igshid=YmMyMTA2M2Y"
            className="home-footer-social-link-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://twitter.com/EWIT_Official?t=KGqw1IpsFT9DIGxgytg6qg&s=09"
            className="home-footer-social-link-item"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitterSquare />
          </a>
          <a
            href="https://discord.com/invite/WwfnzEHx"
            className="home-footer-social-link-item"
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord />
          </a>
        </div>
      </div>
    </div>
  )
}
