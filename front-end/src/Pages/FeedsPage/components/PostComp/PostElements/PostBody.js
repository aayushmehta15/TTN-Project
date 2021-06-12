import React from "react";
import Avatar from "../../../../../shared/components/UIElementComp/Avatar/Avatar";
import StyledTextField from "../../../../../shared/components/UIElementComp/StyleTextField/StyledTextField";
import "./PostBody.css";

const btnBarStyle = {
    marginRight: "10px",
    fontSize: "1rem",
    color: "#8D9198",
};

function PostBody(props) {
    const description = `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a
    type specimen book.`;

    return (
        <main class="post-body">
            {/* Post Description */}
            <p>{description}</p>
            <br />
            {/* Post Images */}
            <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                alt="profileImage"
            />
            <br />
            {/* Post Like,dislike and comment count */}
            <div className="count">
                <div className="count-left">
                    <span>
                        <i
                            className="far fa-thumbs-up"
                            style={{
                                backgroundColor: "#1374E0",
                                color: "#fff",
                                borderRadius: "50%",
                                marginRight: "4px",
                                padding: "4px",
                            }}
                        />
                        123
                    </span>
                    <span>
                        <i
                            className="fas fa-heart-broken"
                            style={{
                                backgroundColor: "#E84A51",
                                color: "#fff",
                                borderRadius: "50%",
                                margin: "4px",
                                padding: "4px",
                            }}
                        />
                        234
                    </span>
                </div>
                <div className="count-right">
                    <p style={{ color: "#8D9198", marginTop: "5px" }}>
                        1 comment
                    </p>
                </div>
            </div>
            {/* Like,dislike and comment bar */}
            <div className="btnBars-container">
                <hr />
                <div className="btnBars">
                    <button className="btn">
                        <i className="far fa-thumbs-up" style={btnBarStyle} />
                        Like
                    </button>
                    <button className="btn">
                        <i
                            className="fas fa-heart-broken"
                            style={btnBarStyle}
                        />
                        Dislike
                    </button>
                    <button className="btn">
                        <i className="far fa-comment-alt" style={btnBarStyle} />
                        Comment
                    </button>
                </div>
                <hr />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "15px",
                }}
            >
                <Avatar
                    width="35"
                    height="35"
                    src="https://lh3.googleusercontent.com/a/AATXAJx50M2g4mVkpZ8BYP3UGbW07NmMyFCVBXlf4OV1=s96-c"
                />
                <StyledTextField placeholder="Write a comment..." />
            </div>
        </main>
    );
}

export default PostBody;
