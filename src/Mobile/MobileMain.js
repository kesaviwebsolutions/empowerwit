import React from 'react'
import img9 from './Images/img9.png'
import img5 from './Images/img.png'
import './mobile.css'
import Mobileabout from './Mobilepages/Mobileabout'
import { Nav } from 'react-bootstrap'
import MobileNav from './MobileNav'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'

export default function MobileMain() {
  return (
    <div>
      <MobileNav />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mobile-view-area">
              <div className="mobile-view-content">
                <div className="mobile-background">
                  <div className="mobile-img">
                    <img src={img9} alt="" className="mi" />
                    <span className="tagline">
                      Empowering Women Around The World
                    </span>
                  </div>
                  <div className="mobile-img">
                    <img src={img5} alt="" className="mi" />
                  </div>
                  <div className="mobileview-explore">
                    <Link to="/courses" className="mobileec">
                      Explore our trainings
                    </Link>
                    <div class="btn-group dropup">
                      <button type="button" className="btn btn-secondary dropdown-toggle burger" data-bs-toggle="dropdown" aria-expanded="false">
                        <GiHamburgerMenu />
                      </button>
                      <ul class="dropdown-menu">
                        <li className="nav-item">
                          <a className="nav-link active menu" aria-current="page" href="#about-us">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link menu" href="#trainings">Training</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link menu" href="#partners">Partners</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link menu" href="#roadmap">Roadmap</a>
                        </li>
                        <li className="nav-item">
                          <li className="nav-item">
                            <a className="nav-link menu" href="#contact">Contact</a>
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="#about-us">
        <Mobileabout />
      </div>
    </div>
  )
}
