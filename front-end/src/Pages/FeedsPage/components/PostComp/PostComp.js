// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsData } from "../../../../redux/Posts/postActions";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import "./PostComp.css";
import PostBody from "./PostElements/PostBody";
import PostHeader from "./PostElements/PostHeader";
function PostComp(props) {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchPostsData());
    // }, []);
    return (
        <div className="postStyle">
            <Card>
                <PostHeader />
                <PostBody />
            </Card>
        </div>
    );
}

export default PostComp;
