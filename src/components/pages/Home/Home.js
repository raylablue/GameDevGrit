import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import EpisodeData from "../../organisms/EpisodeData/EpisodeData";
import "../../../styles/theme.scss";

function Home() {
    return (
        <div className="bg-primary">
            <NavBar />

            <div className="container-banner">
                <img className="img-wide" alt="fpo sample banner" src={require("../../../FPObanner.jpg")}/>
            </div>

            <EpisodeData />

        </div>
    )
}

export default Home;