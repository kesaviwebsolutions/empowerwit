import React from 'react'
import img9 from './Images/img9.png'
import img5 from './Images/img5.png'
import './mobile.css'
import Mobileabout from './Mobilepages/Mobileabout'
import { Nav } from 'react-bootstrap'
import MobileNav from './MobileNav'
import { GiHamburgerMenu } from "react-icons/gi";

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
                    <Nav.Link href="/courses" className="mobileec">
                      Explore our trainings
                    </Nav.Link>
                    <div class="btn-group dropup">
            <button type="button" className="btn btn-secondary dropdown-toggle burger" data-bs-toggle="dropdown" aria-expanded="false">
            <GiHamburgerMenu/>
            </button>
            <ul class="dropdown-menu">
            <li className="nav-item">
                  <Nav.Link className="nav-link active menu" aria-current="page" href="#about-us">About</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link menu" href="#trainings">Training</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link menu" href="#partners">Partners</Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link menu" href="#roadmap">Roadmap</Nav.Link>
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
