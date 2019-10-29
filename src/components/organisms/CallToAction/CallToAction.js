import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

function CallToAction() {
    return (
        <div className="container">
            <div className="wrapper-cta">

                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-primary-3">
                                <FontAwesomeIcon className="size fa-6x text-white" icon={faDiscord} />
                            </button>
                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="justify-content-start">
                            <h3>Join our discord server</h3>
                            <p>
                                Listen to the show live, chat with guests and other game developers.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CallToAction;



