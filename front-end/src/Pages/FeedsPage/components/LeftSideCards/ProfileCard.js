import React from "react";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import "./ProfileCard.css";
function ProfileCard(props) {
    return (
        <Card>
            <div className="Card-header">
                <img
                    src={props.coverImage}
                    alt="coverImage"
                    width="200"
                    height="80"
                />
                <img
                    src={props.profileImage}
                    alt="UserImage"
                    className="avatarMove"
                />
            </div>
            <div className="Card-content">
                <h4>{props.userName}</h4>
                <h6>
                    {props.desgnation === undefined
                        ? ""
                        : `${props.desgnation} at TTN`}
                </h6>
                <div className="sub-card-content">
                    <div className="sub-content-left">
                        <h4>234</h4>
                        <h5>Friends</h5>
                    </div>
                    <div className="sub-content-right">
                        <h4>{props.postCount}</h4>
                        <h5>Post</h5>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ProfileCard;
