import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import "./Home.scss";
import EpisodeData from "../../organisms/EpisodeData/EpisodeData";
import EpisodeCard from "../../organisms/EpisodeCard/EpisodeCard";




function Home() {
    return (
        <div className="bg-dark">
            <NavBar />

            <div className="container-banner">
                <img className="img-wide" alt="fpo sample banner" src={require("../../../FPObanner.jpg")}/>
            </div>

            <EpisodeData />
            <EpisodeCard/>



        </div>
    )
}

export default Home;