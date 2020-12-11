import React from "react";

function Footer() {
    return (
        <div className="card mb-3 bg-dark">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={require("./EaterFaceAnim.gif")}
                        width="100"
                        height="650"
                        className="card-img"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Game Dev Grit Podcast</h5>
                        <p className="card-text">You've reached the end of the feed.
                            Be sure to check back in for more episodes or subscribe! <br/>
                            (Or stick around a click grit to feed him cookies)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;