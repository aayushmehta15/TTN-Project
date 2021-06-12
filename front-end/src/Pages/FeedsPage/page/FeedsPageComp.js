import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    }, []);

    const [user] = useSelector(state => state.feeds.userData);
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
                        />
                        <br />
                    </div>
                    <div className="feeds-middle">
                        <CreatePostComp />
                        <br />
                        <PostComp />
                        <br />
                        <PostComp />
                        <br />
                        <PostComp />
                        <br />
                        <PostComp />
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