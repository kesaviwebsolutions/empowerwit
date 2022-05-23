import React from "react";
import cardimg1 from "./images/cardimg1.jpg";
import cardimg2 from "./images/cardimg2.jpg";
import icon from "./images/icon_profil_3.png";
import icon2 from "./images/icon_profil_1.png";
import icon3 from "./images/icon_profil_2.png";
import { BsFillCircleFill } from "react-icons/bs";
import "./coursecard.css";

export default function CourseCards() {
  const trainingInfo = [
    {
      icon: <BsFillCircleFill />,
      img: [cardimg1],
      img2: [icon],
      tag: "Sadie tesla",
      title: "Introduction to blockchain technology",
      description:
        "In this course we will discuss the limitations of the Internet for business and economic activity, and explain how blockchain technology represents the way forward.",
      duration: "Duration",
      time: ":5 hours",
      icon2: <BsFillCircleFill />,
      icon3: <BsFillCircleFill />,
    },
    {
      icon: <BsFillCircleFill />,
      img: [cardimg2],
      img2: [icon],
      tag: "Sadie tesla",
      title: "Social Media marketing and Analytics",
      description:
      "In this course we will discuss the limitations of the Internet for business and economic activity, and explain how blockchain technology represents the way forward.",
      duration: "Duration",
      time: ":5 hours",
      icon2: <BsFillCircleFill />,
      icon3: <BsFillCircleFill />,
    },
    {
      icon: <BsFillCircleFill />,
      img: [cardimg1],
      img2: [icon2],
      tag: "Sadie tesla",
      title: "Digital Marketing & PR",
      description:
        "In this course we will discuss the limitations of the Internet for business and economic activity, and explain how blockchain technology represents the way forward.",
      duration: "Duration",
      time: ":5 hours",
      icon2: <BsFillCircleFill />,
      icon3: <BsFillCircleFill />,
    },
    {
      icon: <BsFillCircleFill />,
      img: [cardimg2],
      img2: [icon3],
      tag: "Sadie tesla",
      title: "Web Development",
      description:
        "In this course we will discuss the limitations of the Internet for business and economic activity, and explain how blockchain technology represents the way forward.",
      duration: "Duration",
      time: ":5 hours",
      icon2: <BsFillCircleFill />,
      icon3: <BsFillCircleFill />,
    },
  ];

  const renderTrainings = (trainingInfo, index) => {
    return (
      <div
        key={index}
        className="card"
        style={{
          width: "18rem",
          padding: "0px",
          border: "none",
          marginTop: "20px",
          borderRadius: "25px",
          marginRight: "20px",
        }}
      >
        <img
          src={trainingInfo.img}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "150px",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
          }}
        />
        <div className="active-icon">{trainingInfo.icon}</div>
        <div className="card-body position-relative">
          <img src={trainingInfo.img2} alt="" className="icon" />
          <div className="tesla">
            <span className="st">{trainingInfo.tag}</span>
          </div>
          <h5 style={{ color: "#d44a73", marginTop: "20px" }}>
            {trainingInfo.title}
          </h5>
          <p className="card-text" style={{ fontSize: "14px" }}>
            {trainingInfo.description}
          </p>
          <div className="duration">
            <div className="duration-time">
              <b>{trainingInfo.duration}</b>{" "}
              <span className="time">{trainingInfo.time}</span>
            </div>
            <div className="levels">
              <div className="level-item">{trainingInfo.icon2}</div>
              <div className="level-items">
                {trainingInfo.icon3}
                {trainingInfo.icon3}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row">{trainingInfo.map(renderTrainings)}</div>
        </div>
      </section>
    </div>
  );
}
