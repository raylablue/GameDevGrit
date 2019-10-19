import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import EpisodeData from "../../organisms/EpisodeData/EpisodeData";

function Home() {
    return (
        <div className="bg-primary-3">
            <NavBar />

            <div className="container-banner">
                <img className="img-wide" alt="fpo sample banner" src={require("../../../FPObanner.jpg")}/>
            </div>

            <EpisodeData />

        </div>
    )
}

export default Home;