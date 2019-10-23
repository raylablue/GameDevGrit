import React from "react";
import "../../../styles/theme.scss"
import "./EpisodeCard.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

function EpisodeCard({
   title,
   description,
   datePublished,
   fileUrl,
}) {
    return (
        <div className="container">
            <div className="wrapper-card bg-primary-2">

                <div className="row">

                    <div className="col-lg">

                        <div className="wrapper-title">
                            <h2 className="text-center">{title}</h2>
                        </div>

                        <div className="wrapper-play">
                            <div className="size fa-4x">
                                <div className="d-flex justify-content-center bg-primary-3">
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </div>
                        </div>

                        <a
                            className="btn btn-primary btn-lg btn-block"
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download
                        </a>

                    </div>
                </div>

                <div className="wrapper-description">
                    <small>{datePublished}</small>
                    <h3>Description</h3>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard;