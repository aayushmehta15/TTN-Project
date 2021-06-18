import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentData } from "../../../redux/Comments/commentActions";
import { fetchPostsData } from "../../../redux/Posts/postActions";
import { fetchUserData } from "../../../redux/User/userActions";
import HeaderComp from "../../../shared/components/HeaderComp/HeaderComp";
import Spinner from "../../../shared/components/UIElementComp/Spinner/Spinner";
import CreatePostComp from "../components/CreatePostComp/CreatePostComp";
import ProfileCard from "../components/LeftSideCards/ProfileCard";
import RecentsCard from "../components/LeftSideCards/RecentsCard";
import PostComp from "../components/PostComp/PostComp";
import "./FeedsPageComp.css";

const FeedsPageComp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchPostsData());
        dispatch(fetchCommentData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [user] = useSelector(state => state.feeds.userData);
    const postData = useSelector(state => state.posts.postData);

    ///////////////////////////////CHECK POST////////////////////////////
    let displayPost =
        postData.length === 0 ? (
            <h1 style={{ textAlign: "center", color: "#787585" }}>
                No New Post...
            </h1>
        ) : (
            postData.map(data => (
                <PostComp
                    key={data._id}
                    userImage={data.profileId.profileImage}
                    userName={data.profileId.userName}
                    time={data.createdAt}
                    description={data.description}
                    postImage={data.postImage}
                    postId={data._id}
                    profileId={data.profileId._id}
                />
            ))
        );

    ///////////////////////////////CHECK FEEDSPAGE////////////////////////////

    let feedsPage =
        user === undefined ? (
            <Spinner />
        ) : (
            <>
                <HeaderComp
                    Image={user.profileImage}
                    userName={user.userName}
                />

                <main className="feeds-body">
                    {/* FeedsPage Body */}

                    <div className="feeds-left">
                        <ProfileCard
                            profileImage={user.profileImage}
                            userName={user.userName}
                            coverImage={user.coverImage}
                            designation={user.designation}
                            postCount={postData.length}
                        />
                        <br />
                        <RecentsCard />
                    </div>
                    <div className="feeds-middle">
                        <CreatePostComp />
                        <br />
                        {displayPost}
                        <br />
                    </div>
                    <div className="feeds-right"></div>
                </main>
            </>
        );

    return <React.Fragment>{feedsPage}</React.Fragment>;
};

export default FeedsPageComp;
