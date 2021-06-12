import logo from "../../../assets/Logo/tothenewLogo.png";

import classes from "./HeaderComp.module.css";
import Avatar from "../UIElementComp/Avatar/Avatar";
import { useDispatch } from "react-redux";
import { removeUserToken } from "../../../redux/Auth/authActions";

const HeaderComp = props => {
    const dispatch = useDispatch();
    return (
        <div className={classes.header}>
            <div className={classes.header__left}>
                <img src={logo} alt={logo} className={classes.logo} />
            </div>

            <div className={classes.header__right}>
                <Avatar
                    src={props.Image}
                    alt="userImage"
                    width="30"
                    height="30"
                />
                <h4 className={classes.spacing}>{props.userName}</h4>
                <div className={`${classes.PersonIcon} ${classes.spacing}`}>
                    <i className="fab fa-facebook-messenger" />
                </div>
                <div className={`${classes.PersonIcon} ${classes.spacing}`}>
                    <i className="fas fa-user" />
                </div>
                <div
                    className={`${classes.PersonIcon} ${classes.spacing}`}
                    onClick={() => {
                        dispatch(removeUserToken());
                    }}
                >
                    <i className="fas fa-sign-out-alt" />
                </div>
            </div>
        </div>
    );
};

export default HeaderComp;
