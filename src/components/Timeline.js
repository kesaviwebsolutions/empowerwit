import React from "react"
import { Chrono } from "react-chrono";
import "./timeline.css"

const Timeline = () => {
    const items = [{
        title: "April 2022",
        cardDetailedText: "Roadmap Starts",
    },
    {

        cardDetailedText: "Training 30 housewives to become leaders in IT",
    },
    {

        cardDetailedText: "Collaborations with NGOs to promote digital literacy among women. ewives to become leaders in IT.",
    },
    {

        cardDetailedText: "Stamping EWIT's presence across cities with commercial ads and promotions.",
    },
    {

        cardDetailedText: "Expand EWIT's global presence by forming partnerships with organisations working in the fields of women empowerment across  the globe.",
    },
    {

        cardDetailedText: "Building women empowerment centric blockchain to bring power of web3 to women across the globe.",
    },
    {
        title: "March 2023",
        cardDetailedText: "Roadmap End",
    },];



    return (
        <div style={{ height: "400px", marginTop:"50px" }}>
            <Chrono items={items} mode="HORIZONTAL" />
        </div>
    )
}

export default Timeline