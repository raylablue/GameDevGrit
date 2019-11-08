import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import EpisodeData from "../../organisms/EpisodeData/EpisodeData";
import "../../../styles/theme.scss";
import CallToAction from "../../organisms/CallToAction/CallToAction";
import fpoBanner from './FPObanner.jpg';

function Home() {
    return (
        <div>
            <NavBar />
            <img className="img-wide" alt="fpo sample banner" src={fpoBanner} />
            <CallToAction/>
            <EpisodeData />

        </div>
    )
}

export default Home;