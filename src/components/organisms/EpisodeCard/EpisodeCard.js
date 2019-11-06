import React from "react";
import "../../../styles/theme.scss"
import "./EpisodeCard.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faHeadphones} from "@fortawesome/free-solid-svg-icons";

function EpisodeCard({
   title,
   description,
   datePublished,
   fileUrl,
}) {
    return (
        <div className="container">
            <div className="wrapper-card bg-primary-2 mt-6 py-4 px-4">

                {/*Episode Title*/}
                <div className="wrapper-title">
                    <h2 className="display-4 text-center">
                        <FontAwesomeIcon className="headphones mr-3" icon={faHeadphones} />
                        {title}
                    </h2>
                </div>

                <div className="row pb-20">

                    <div className="col-sm">
                        {/*Audio Player */}
                        <div className="wrapper-play p-2 bg-info-2">
                            <audio
                                controls preload='auto'
                                className="audio_volume_only">
                                <source
                                    src={fileUrl}
                                    type='audio/mp3'/>
                            </audio>
                        </div>

                            {/*Download Button*/}
                            <div className="wrapper-download">
                                <a
                                    className="btn btn-primary-3 btn-lg btn-block"
                                    href={fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="mr-2">Download</span>
                                    <FontAwesomeIcon className="fa-1x" icon={faDownload} />
                                </a>
                            </div>

                    </div>
                    {/*Description and Show Notes*/}
                    <div className="col-sm">
                        <div className="wrapper-description">
                            <small>{datePublished}</small>
                            <h3>Description</h3>
                            <div dangerouslySetInnerHTML={{__html: description}} />
                        </div>
                    </div>
                </div>

            </div> {/*wrapper card*/}
        </div>
    )
}

export default EpisodeCard;