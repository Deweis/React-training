import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId).then(data => {
                this.props.setUserProfile(data);
            })
    }

    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile
    }
}
let withUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);