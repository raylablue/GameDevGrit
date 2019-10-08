import React from "react";



function Home() {
    return (
        <div>
            <h2>Game Dev Grit Podcast</h2>
            <p>This is the home page for Game Dev Grit Podcast</p>
            <div className="container-fluid">
                <img className="img-fluid" alt="fpo sample banner" src={require("../../../fpo.jpg")}/>
            </div>

        </div>
    )
};

export default Home;