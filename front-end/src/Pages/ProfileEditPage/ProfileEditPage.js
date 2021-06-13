// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import HeaderComp from "../../shared/components/HeaderComp/HeaderComp";
// import Card from "../../shared/components/UIElementComp/Card/Card";
// import Spinner from "../../shared/components/UIElementComp/Spinner/Spinner";
// import ProfileCard from "../FeedsPage/components/LeftSideCards/ProfileCard";
import "./ProfileEditPage.css";
function ProfileEditPage() {
    // const [user] = useSelector(state => state.feeds.userData);
    // let ProfileEditPage =
    //     user === undefined ? (
    //         <Spinner />
    //     ) : (
    //         <>
    //             <HeaderComp
    //                 Image={user.profileImage}
    //                 userName={user.userName}
    //             />
    //         </>
    //     );
    return (
        <div className="edit-body">
            <div className="profile-card">
                <img
                    src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                    alt="CoverImage"
                    className="cover-image"
                />
                <img
                    src="https://lh3.googleusercontent.com/a/AATXAJx50M2g4mVkpZ8BYP3UGbW07NmMyFCVBXlf4OV1=s96-c"
                    alt="ProfileImage"
                    className="profile-image"
                />
                {/* <i className="fas  fa-camera fa" style={{}}></i> */}
            </div>
        </div>
    );
}

export default ProfileEditPage;
