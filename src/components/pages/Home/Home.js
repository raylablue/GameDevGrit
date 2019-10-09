import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";

function Home() {
    return (
        <>
            <NavBar />

            {/*<h2>Game Dev Grit Podcast</h2>*/}
            {/*<p>This is the home page for Game Dev Grit Podcast</p>*/}
            <div className="container">
                <img className="img-wide" alt="fpo sample banner" src={require("../../../FPObanner.jpg")}/>
            </div>

        </>
    )
}

export default Home;