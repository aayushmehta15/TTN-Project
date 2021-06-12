import React from "react";
import Avatar from "../../../../shared/components/UIElementComp/Avatar/Avatar";
import Card from "../../../../shared/components/UIElementComp/Card/Card";
import StyledTextField from "../../../../shared/components/UIElementComp/StyleTextField/StyledTextField";

function CreatePostComp() {
    return (
        <Card>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Avatar
                    width="30"
                    height="30"
                    src="https://lh3.googleusercontent.com/a/AATXAJx50M2g4mVkpZ8BYP3UGbW07NmMyFCVBXlf4OV1=s96-c"
                    alt="user"
                />
                <StyledTextField placeholder="Start a post..." />

                <input type="file" id="inputFile" style={{ display: "none" }} />
                <label htmlFor="inputFile">
                    <i
                        class="fas fa-photo-video"
                        style={{
                            color: "#5CBD63",
                            fontSize: "1.5rem",
                            margin: "0 5px 0 20px",
                        }}
                    />
                </label>
                <label htmlFor="inputFile">Photo/Video</label>
            </div>
        </Card>
    );
}

export default CreatePostComp;
