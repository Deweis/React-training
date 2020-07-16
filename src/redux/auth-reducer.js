const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_USER_PHOTO = 'SET_AUTH_USER_PHOTO';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth:false,
    photo: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_AUTH_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            }

        default:
            return state;

    }
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setAuthUserPhoto = (photo) => ({type: SET_AUTH_USER_PHOTO, photo});

export default authReducer;