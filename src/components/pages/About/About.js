import React from "react";
import "./About.scss"
import NavBar from "../../organisms/NavBar/NavBar";
import Footer from "../../organisms/Footer/Footer";
import "../../../styles/theme.scss";

function About() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="py-3 p-about__body-text">
                    <h2>About</h2>
                    <p>Game Dev Grit Podcast, created and hosted by M dot Strange, is a community that discusses the unpleasant and often unadressed realities of game development. The struggles, the solutions, the long tedious nights of effort. The grit. <br/>
                    Often the promotion of games and their development cycles are made 'pretty'. Polished up before showing even a beta build. If you've made a pre-alpha test that's all primitive shapes and some shoestring code, know that you are not alone. Many of us have projects that are not-yet-pretty. And they don't have to be.
                    <br/>
                     Come join a community of passionate game creators. Listen to their stories and share your own.
</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;