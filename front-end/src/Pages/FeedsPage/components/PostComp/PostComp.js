import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    createCommentData,
    fetchCommentData,
} from "../../../../redux/Comments/commentActions";
import { fetchLike } from "../../../../redux/LikeAndDislike/likeAndDislikeActions";

import CommentComp from "../CommentComp/CommentComp";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import Avatar from "../../../../shared/components/UIElementComp/Avatar/Avatar";
import Moment from "react-moment";
import "./PostComp.css";
import { fetchPostLike } from "../../../../redux/LikeAndDislike/likeAndDislikeActions";
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
    const [displayCommentsBtn, setDisplayCommentsBtn] = useState(false);
    const commentUpdated = useSelector(state => state.comments.updateComment);
    const dispatch = useDispatch();

    // Data Filtering of the comments
    const commentData = useSelector(state => state.comments.commentData);

    const filterCommentsById = commentData.filter(
        data => data.postId._id === props.postId
    );

    // check if we have a postImage or not and display accordingly
    const postImageDisplay =
        props.postImage === "" ? null : (
            <img src={props.postImage} alt="profileImage" />
        );

    // check new comment added or not and display accordingly
    {
        const checkNewComment = commentUpdated
            ? dispatch(fetchCommentData())
            : null;
    }

    // State setting comments data
    const [comment, setComment] = useState({
        profileId: props.profileId,
        postId: props.postId,
        description: "",
    });

    const commentSubmitHandler = event => {
        event.preventDefault();
        // console.log(comment);
        dispatch(createCommentData(comment));
        setComment({ ...comment, description: "" });
    };

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
                                {filterCommentsById.length}{" "}
                                {filterCommentsById.length > 1
                                    ? "comments"
                                    : "comment"}
                            </p>
                        </div>
                    </div>
                    {/* ********************Like,dislike and comment bar ****************/}
                    <div className="btnBars-container">
                        <hr />
                        <div className="btnBars">
                            <button
                                className="btn"
                                // onClick={() => {
                                //     dispatch(
                                //         fetchLike(props.profileId, props.postId)
                                //     );
                                // }}
                            >
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
                            <button
                                className="btn"
                                onClick={() => {
                                    setDisplayCommentsBtn(!displayCommentsBtn);
                                }}
                            >
                                <i
                                    className="far fa-comment-alt"
                                    style={btnBarStyle}
                                />
                                Comment
                            </button>
                        </div>
                    </div>
                    <hr />
                    {/*****************Comment Section*****************************/}

                    {displayComments &&
                        filterCommentsById.map(data => (
                            <>
                                <br />
                                <CommentComp
                                    key={data._id}
                                    description={data.description}
                                    userImage={data.profileId.profileImage}
                                    userName={data.profileId.userName}
                                />
                            </>
                        ))}

                    {displayCommentsBtn && (
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
                                src={props.userImage}
                            />
                            <form
                                onSubmit={commentSubmitHandler}
                                style={{ width: "100%" }}
                            >
                                <input
                                    type="text"
                                    placeholder="Write a comment..."
                                    className="input-comment"
                                    value={comment.description}
                                    onChange={event => {
                                        setComment({
                                            ...comment,
                                            description: event.target.value,
                                        });
                                    }}
                                />
                            </form>
                        </div>
                    )}
                </main>
            </Card>
            <br />
        </div>
    );
}

export default PostComp;
