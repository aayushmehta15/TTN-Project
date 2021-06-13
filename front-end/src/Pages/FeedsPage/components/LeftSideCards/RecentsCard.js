import React from "react";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import "./RecentsCard.css";
const iconSpacing = {
    marginRight: "5px",
};
function RecentsCard() {
    return (
        <Card>
            <div className="container">
                <h5>Recent</h5>
                <p>
                    <i className="fab fa-slack" style={iconSpacing} />
                    #javascript
                </p>
                <p>
                    <i className="far fa-calendar-check" style={iconSpacing} />
                    Mobile Trends Conference 2021
                </p>
                <p>
                    <i className="fas fa-user-friends" style={iconSpacing} />
                    Freelance Developers
                </p>
                <p style={{ color: "#5BA0D3" }}>
                    <i className="fas fa-chevron-down" style={iconSpacing} />
                    Show more
                </p>
            </div>
            <hr></hr>
            <div className="container">
                <h5>Groups</h5>
                <p>
                    <i className="fab fa-slack" style={iconSpacing} />
                    #javascript
                </p>
                <p>
                    <i className="far fa-calendar-check" style={iconSpacing} />
                    Mobile Trends Conference 2021
                </p>
                <p>
                    <i className="fas fa-user-friends" style={iconSpacing} />
                    Freelance Developers
                </p>
                <p style={{ color: "#5BA0D3" }}>
                    <i className="fas fa-chevron-down" style={iconSpacing} />{" "}
                    Show 6 more
                </p>
            </div>
            <hr></hr>
            <div className="container">
                <h5>Subscriptions</h5>
                <p>
                    <i className="fas fa-lightbulb" style={iconSpacing} />
                    Programming with Mosh
                </p>
                <p>
                    <i className="fas fa-graduation-cap" style={iconSpacing} />
                    E-learning Bridge
                </p>
                <p>
                    <i className="fas fa-gamepad" style={iconSpacing} />
                    Clever Programmer
                </p>
                <p style={{ color: "#5BA0D3" }}>
                    <i className="fas fa-chevron-down" /> Show 6 more
                </p>
            </div>
        </Card>
    );
}

export default RecentsCard;
