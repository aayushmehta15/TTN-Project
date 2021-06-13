import React, { useState } from "react";
import CommentComp from "../CommentComp/CommentComp";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import Avatar from "../../../../shared/components/UIElementComp/Avatar/Avatar";
import StyledTextField from "../../../../shared/components/UIElementComp/StyleTextField/StyledTextField";
import Moment from "react-moment";
import "./PostComp.css";
// import PostHeader from "./PostElements/PostHeader";
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

const btnBarStyle = {
    marginRight: "10px",
    fontSize: "1rem",
    color: "#8D9198",
};

function PostComp(props) {
    const [displayComments, setDisplayComments] = useState(false);

    const postImageDisplay =
        props.postImage === "" ? null : (
            <img src={props.postImage} alt="profileImage" />
        );

    // date styling
    // let date = props.time.split("T")[0];
    // let dateStyle = new Date(date).toDateString();

    return (
        <div className="postStyle">
            <Card>
                {/* <PostHeader image/> */}
                {/******************* PostHeader *******************/}
                <header className="post-header">
                    <div className="post-header-left">
                        <Avatar
                            src={props.userImage}
                            width="30"
                            height="30"
                            alt="user"
                        />
                        <div className="avatar-details">
                            <h5>{props.userName}</h5>
                            <h6 style={{ fontWeight: "400" }}>
                                <Moment fromNow>{props.time}</Moment>
                            </h6>
                        </div>
                    </div>
                    <div className="post-header-right">
                        <i className="fas fa-ellipsis-h" style={style} />
                    </div>
                </header>
                {/******************* PostBody *******************/}

                <main className="post-body">
                    {/* Post Description */}
                    <p>{props.description}</p>
                    <br />
                    {/* Post Images */}
                    {postImageDisplay}
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
                            <p
                                style={{ color: "#8D9198", marginTop: "5px" }}
                                onClick={() =>
                                    setDisplayComments(!displayComments)
                                }
                            >
                                comment
                            </p>
                        </div>
                    </div>
                    {/* ********************Like,dislike and comment bar ****************/}
                    <div className="btnBars-container">
                        <hr />
                        <div className="btnBars">
                            <button className="btn" onClick={() => {}}>
                                <i
                                    className="far fa-thumbs-up"
                                    style={btnBarStyle}
                                />
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
                                <i
                                    className="far fa-comment-alt"
                                    style={btnBarStyle}
                                />
                                Comment
                            </button>
                        </div>
                    </div>

                    {/*****************Comment Section*****************************/}
                    <hr />
                    <br />
                    {displayComments && (
                        <CommentComp
                            postId={props.postId}
                            profileId={props.profileId}
                        />
                    )}
                </main>
            </Card>
            <br />
        </div>
    );
}

export default PostComp;
