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
        <div className="container bg-primary-2 mt-6 py-4 px-4">
            <div>
                <h2 className="display-4 text-center text-white text-break">
                    <FontAwesomeIcon
                        className="headphones mr-3"
                        icon={faHeadphones}
                    />
                    {title}
                </h2>
            </div>

            <div className="row pb-2">

                <div className="col-md-6 col-lg-4">
                    <div className="p-2 bg-info-2">
                        <audio
                            controls preload='none'
                            className="w-100"
                        >
                            <source
                                src={fileUrl}
                                type='audio/mp3'/>
                        </audio>
                    </div>

                    <div>
                        <a
                            className="btn btn-primary-3 btn-lg btn-block"
                            href={fileUrl}
                            download="attachment"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="mr-2">Download</span>
                            <FontAwesomeIcon
                                className="fa-1x"
                                icon={faDownload}
                            />
                        </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-8">
                    <small className="text-gray">{datePublished}</small>
                    <h3 className="text-info">Description</h3>
                    <div
                        className="o-episode-card__content"
                        dangerouslySetInnerHTML={{__html: description}}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
            </div>
        </div>
    )
}

export default EpisodeCard;