import Avatar from "../../../../shared/components/UIElementComp/Avatar/Avatar";
import "./CommentComp.css";

function CommentComp(props) {
    return (
        <>
            <div className="comment-container">
                <Avatar
                    src={props.userImage}
                    width="40"
                    height="40"
                    alt="userImage"
                />
                <div className="sub-comment-container">
                    {/* <h4>{props.userName}</h4> */}
                    <h4>{props.userName}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}

export default CommentComp;
