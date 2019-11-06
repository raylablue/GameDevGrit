import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";

function CallToAction() {
    return (
        <div className="container mt-6">

            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-5 offset-lg-2 mr-2 mb-4">
                    <button
                        type="button"
                        className="btn btn-block btn-primary-3 btn-lg align-baseline"
                    >
                        <FontAwesomeIcon
                            className="size fa-4x text-white mr-2 d-none d-lg-inline"
                            icon={faDiscord}
                        />
                        <span className="h1 align-bottom">Join Our Discord</span>
                    </button>
                    <div/>
                </div>

                <div className="col col-lg-3">
                    <h3>Join our discord server</h3>
                    <p>
                        Listen to the show live, chat with guests and other game developers.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default CallToAction;



