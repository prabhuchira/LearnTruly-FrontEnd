import { AsyncStorage } from 'react-native';

export const getToken = (token) => ({
    type: 'GET_TOKEN',
    token,
});

export const saveToken = token => ({
    type: 'SAVE_TOKEN',
    token
});

export const removeToken = () => ({
    type: 'REMOVE_TOKEN',
});

export const loading = bool => ({
    type: 'LOADING',
    isLoading: bool,
});

export const error = error => ({
    type: 'ERROR',
    error,
});

export const testing = () => ({
    type:'windows'
})

export const getUserToken = () => dispatch => 

 AsyncStorage.getItem('userToken')
        .then((data) => {
            dispatch(loading(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })


export const saveUserToken = (data) => dispatch =>
        
        AsyncStorage.setItem('userToken', data)
            .then((data) => {
                // console.log(data,"windows")
                dispatch(loading(false));
                dispatch(saveToken(data));
                // console.log(data,"windows")
            })
            .catch((err) => {
                dispatch(loading(false));
                dispatch(error(err.message || 'ERROR'));
            })
    
export const removeUserToken = () => dispatch =>
        AsyncStorage.removeItem('userToken')
            .then((data) => {
                dispatch(loading(false));
                dispatch(removeToken(data));
            })
            .catch((err) => {
                dispatch(loading(false));
                dispatch(error(err.message || 'ERROR'));
            })


export const testingFunc = () => {
    return dispatch => {
        dispatch(testing())
    }
}