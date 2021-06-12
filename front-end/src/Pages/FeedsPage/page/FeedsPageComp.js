import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsData } from "../../../redux/Posts/postActions";
import { fetchUserData } from "../../../redux/User/userActions";
import HeaderComp from "../../../shared/components/HeaderComp/HeaderComp";
import Spinner from "../../../shared/components/UIElementComp/Spinner/Spinner";
import CreatePostComp from "../components/CreatePostComp/CreatePostComp";
import ProfileCard from "../components/LeftSideCards/ProfileCard";
import PostComp from "../components/PostComp/PostComp";
import "./FeedsPageComp.css";
const FeedsPageComp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserData());
        dispatch(fetchPostsData());
    }, []);

    const [user] = useSelector(state => state.feeds.userData);
    const postData = useSelector(state => state.posts.postData);

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
                />
            ))
        );
    console.log(postData);
    // console.log(user);
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
                            postCount={postData.length}
                        />
                        <br />
                    </div>
                    <div className="feeds-middle">
                        <CreatePostComp />
                        <br />
                        {displayPost}
                        <br />
                    </div>
                    <div className="feeds-right"></div>

                    {/* Sidebar left */}
                    {/* Sidebar Right */}
                    {/* Feeds */}
                </main>
            </>
        );

    return <React.Fragment>{feedsPage}</React.Fragment>;
};

export default FeedsPageComp;
