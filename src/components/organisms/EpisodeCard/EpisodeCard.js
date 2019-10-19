import React from "react";
import "./EpisodeCard.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

function EpisodeCard() {
    return (
        <div className="container">
            <div className="wrapper-card bg-primary-2">

                <div className="row">

                    <div className="col-lg">

                        <div className="wrapper-title">
                            <h2 className="text-center">Episode Title</h2>
                        </div>

                        <div className="wrapper-play">
                            <div className="size fa-4x">
                                <div className="d-flex justify-content-center bg-primary-3">
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
    )
}

export default EpisodeCard;