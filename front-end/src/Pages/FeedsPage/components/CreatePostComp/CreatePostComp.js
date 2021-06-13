import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createPostData,
    fetchPostsData,
} from "../../../../redux/Posts/postActions";
import Avatar from "../../../../shared/components/UIElementComp/Avatar/Avatar";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import StyledTextField from "../../../../shared/components/UIElementComp/StyleTextField/StyledTextField";
import "./CreatePostComp.css";

function CreatePostComp() {
    const formData = new FormData();

    const [post, setPost] = useState({ description: "", postImage: "" });
    const dispatch = useDispatch();
    const updatedPost = useSelector(state => state.posts.updatePost);
    // console.log(updatedPost);
    const checkNewPost = updatedPost ? dispatch(fetchPostsData()) : null;

    const createPostBtn =
        post.description !== "" || post.postImage !== "" ? (
            <i
                className={`fas fa-paper-plane createBtnStyle`}
                onClick={event => {
                    formData.append("description", post.description);
                    formData.append("postImage", post.postImage);

                    dispatch(createPostData(formData));
                    setPost({ ...post, description: "", postImage: "" });
                }}
            />
        ) : null;

    const handlePhoto = event => {
        console.log(event.target.files[0]);
        setPost({ ...post, postImage: event.target.files[0] });
    };

    return (
        <Card>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Avatar
                    width="30"
                    height="30"
                    src="https://lh3.googleusercontent.com/a/AATXAJx50M2g4mVkpZ8BYP3UGbW07NmMyFCVBXlf4OV1=s96-c"
                    alt="user"
                />

                <StyledTextField
                    placeholder="Start a post..."
                    value={post.description}
                    textChangeHandler={event =>
                        setPost({ ...post, description: event.target.value })
                    }
                />

                <input
                    type="file"
                    id="inputFile"
                    style={{ display: "none" }}
                    onChange={handlePhoto}
                />
                <label htmlFor="inputFile">
                    <i
                        className="fas fa-photo-video"
                        style={{
                            color: "#5CBD63",
                            fontSize: "1.5rem",
                            margin: "0 5px 0 20px",
                        }}
                    />
                </label>
                <label htmlFor="inputFile">Photo/Video</label>
                {createPostBtn}
            </div>
        </Card>
    );
}

export default CreatePostComp;
