import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from "../../redux/auth-reducer";
import {authAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component  {

    componentDidMount() {
            authAPI.me().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                    profileAPI.getProfile(id)
                        .then(data => {
                            this.props.setAuthUserPhoto(data.photos.small);
                        })
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        userId : state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo

    }
}

export default connect(mapStateToProps,{setAuthUserData, setAuthUserPhoto})(HeaderContainer);