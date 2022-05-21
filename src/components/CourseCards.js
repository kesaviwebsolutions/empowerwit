import React from "react";
import cardimg1 from "./images/cardimg1.jpg";
import icon from "./images/icon_profil_3.png";
import icon2 from "./images/icon_profil_2.png";
import icon3 from "./images/icon_profil_1.png";
import { BsFillCircleFill } from "react-icons/bs";
import "./coursecard.css";

export default function CourseCards() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                class="card"
                style={{
                  width: "18rem",
                  borderRadius: "25px",
                  border: "none",
                  marginTop: "30px",
                }}
              >
                <img
                  src={cardimg1}
                  class="card-img-top"
                  alt="..."
                  style={{
                    height: "130px",
                    borderTopLeftRadius: "25px",
                    borderTopRightRadius: "25px",
                    maxHeight: "135px",
                  }}
                />
                <BsFillCircleFill
                  size={22}
                  color="#47d447"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "14px",
                    border: "1px solid #fff",
                    borderRadius: "25px",
                  }}
                />
                <div class="card-body position-relative">
                  <div className="icons">
                    <img src={icon} alt="" className="cardimg" />
                  </div>
                  <div className="tesla">
                    <span className="st">Sadie Tesla</span>
                  </div>
                  <h5
                    class="card-title"
                    style={{ marginTop: "30px", color: "#d44a73" }}
                  >
                    Introduction to Blockchain technology
                  </h5>
                  <p
                    class="card-text"
                    style={{ lineHeight: "19px", fontSize: "14px" }}
                  >
                    In this course we will discuss the limitations of the
                    Internet for business and economic activity, and explain how
                    blockchain technology represents the way forward.
                  </p>
                  <span className="blkd">BLKD</span>
                  <div className="duration">
                    <div className="time">
                      <b>Duration</b>
                      <span>: 5 hours</span>
                    </div>
                    <div className="level">
                      <BsFillCircleFill
                        color="#fed3b2"
                        style={{
                          marginRight: "5px",
                          border: "1px solid #393535",
                          borderRadius: "50px",
                        }}
                      />
                      <BsFillCircleFill
                        color="#cccccc"
                        style={{
                          marginRight: "5px",
                          border: "1px solid #393535",
                          borderRadius: "50px",
                        }}
                      />
                      <BsFillCircleFill
                        color="#cccccc"
                        style={{
                          marginRight: "5px",
                          border: "1px solid #393535",
                          borderRadius: "50px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
