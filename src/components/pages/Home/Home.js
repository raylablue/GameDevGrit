import React from "react";
import "./Home.scss";
import NavBar from "../../organisms/NavBar/NavBar";
import EpisodeData from "../../organisms/EpisodeData/EpisodeData";
import "../../../styles/theme.scss";
import CallToAction from "../../organisms/CallToAction/CallToAction";
import Footer from "../../organisms/Footer/Footer";
import Banner from './gdg-banner.png';

function Home() {
    return (
        <div>
            <NavBar />
            <img
                className="p-home__img-wide align-content-lg-center"
                alt="game dev grit banner"
                src={Banner}
            />
            <CallToAction/>
            <EpisodeData />
            <Footer/>

        </div>
    )
}

export default Home;