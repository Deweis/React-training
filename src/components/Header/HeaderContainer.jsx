import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData, setAuthUserPhoto} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component  {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                        .then(response => {
                            this.props.setAuthUserPhoto(response.data.photos.small);
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