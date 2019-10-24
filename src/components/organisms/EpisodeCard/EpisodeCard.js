import React from "react";
import "../../../styles/theme.scss"
import "./EpisodeCard.scss";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faPlay} from "@fortawesome/free-solid-svg-icons";

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
                            <audio
                                controls preload='auto'
                                className="audio_volume_only">
                                <source
                                    src={fileUrl}
                                    type='audio/mp3'/>
                            </audio>
                        </div>

                        <a
                            className="btn btn-primary-3 btn-lg btn-block"
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