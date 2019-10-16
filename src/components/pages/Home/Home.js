import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import "./Home.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



function Home() {
    return (
        <div className="bg-dark">
            <NavBar />

            <div className="container-banner">
                <img className="img-wide" alt="fpo sample banner" src={require("../../../FPObanner.jpg")}/>
            </div>

            <div className="container">
                <div className="wrapper-card bg-primary-2">

                    <div className="row">
                        <div className="d-sm-inline-flex">
                            <img src={require("../../../GDG-LogoIcon.png")}
                                 width="140"
                                 height="140"
                                 className="d-block mr-2"
                                 alt=""/>
                        </div>

                        <div className="col-lg">

                                <div className="wrapper-play">
                                    <div className="size fa-4x">
                                        <div className="d-flex justify-content-center">
                                            <FontAwesomeIcon icon={faPlay} />
                                        </div>
                                    </div>
                                </div>

                            <button type="button" className="btn btn-primary btn-lg btn-block">Download</button>

                        </div>
                    </div>

                    <div className="wrapper-description">
                        <h3>Description</h3>
                        <p>
                            This is a test description.
                            There will be talk of things and stuff related to gritty game development.
                        </p>
                    </div>
                    <div className="wrapper-shownotes">
                        <h3>Show Notes</h3>
                        <p>Links and useful things will go here.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;