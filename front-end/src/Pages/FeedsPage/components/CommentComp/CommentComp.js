import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCommentData } from "../../../../redux/Comments/commentActions";
import Avatar from "../../../../shared/components/UIElementComp/Avatar/Avatar";
import "./CommentComp.css";

function CommentComp(props) {
    const [comment, setComment] = useState({
        profileId: props.profileId,
        postId: props.postId,
        description: "",
    });
    const dispatch = useDispatch();

    const commentSubmitHandler = event => {
        event.preventDefault();
        // console.log(comment);
        dispatch(createCommentData(comment));
        setComment({ ...comment, description: "" });
    };
    // console.log(comment);
    return (
        <>
            <div className="comment-container">
                <Avatar
                    // src={props.userImage}
                    src="https://lh3.googleusercontent.com/a/AATXAJx50M2g4mVkpZ8BYP3UGbW07NmMyFCVBXlf4OV1=s96-c"
                    width="40"
                    height="40"
                    alt="userImage"
                />
                <div className="sub-comment-container">
                    {/* <h4>{props.userName}</h4> */}
                    <h4>Aayush</h4>
                    <p>sdfghjkjhgfdcfvgbhjm</p>
                </div>
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
                <form onSubmit={commentSubmitHandler} style={{ width: "100%" }}>
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
        </>
    );
}

export default CommentComp;
