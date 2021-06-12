import React from "react";
import Avatar from "../../../../../shared/components/UIElementComp/Avatar/Avatar";
import "./PostHeader.css";
const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20px",
    width: "20px",
    backgroundColor: "#eff2f5",
    borderRadius: "50% 50%",
    padding: "15px",
};

function PostHeader(props) {
    return (
        <header className="post-header">
            <div className="post-header-left">
                <Avatar
                    src="https://lh3.googleusercontent.com/a/AATXAJx50M2g4mVkpZ8BYP3UGbW07NmMyFCVBXlf4OV1=s96-c"
                    width="30"
                    height="30"
                    alt="user"
                />
                <div className="avatar-details">
                    <h5>Aayush Mehta</h5>
                    <h6>Time</h6>
                </div>
            </div>
            <div className="post-header-right">
                <i className="fas fa-ellipsis-h" style={style} />
            </div>
        </header>
    );
}

export default PostHeader;
