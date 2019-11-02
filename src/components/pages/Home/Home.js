import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import EpisodeData from "../../organisms/EpisodeData/EpisodeData";
import "../../../styles/theme.scss";
import CallToAction from "../../organisms/CallToAction/CallToAction";

function Home() {
    return (
        <div className="bg-primary">
            <NavBar />
            <img className="img-wide" alt="fpo sample banner" src={require("../../../FPObanner.jpg")}/>
            <CallToAction/>
            <EpisodeData />

        </div>
    )
}

export default Home;