// export const 
import ACTION_TYPES from "./actionTypes";



/* Auth/UserData actions */

export const getUserDataRequest = () => ({
    type: ACTION_TYPES.GET_USER_DATA_REQUEST
})

export const getUserDataSuccess = (payload) => ({
    type: ACTION_TYPES.GET_USER_DATA_SUCCESS,
    payload
})

export const getUserDataError = (error) => ({
    type: ACTION_TYPES.GET_USER_DATA_ERROR,
    error
});


/* Chat actions */

export const addNewMessage = (payload) => ({
        type: ACTION_TYPES.ADD_NEW_MESSAGE,
        payload
    })


export const getUserChatsList = () => ({
    type: ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST
});

export const getUserChatListSuccess = (payload) => ({
    type: ACTION_TYPES.GET_USER_CHATS_LIST_SUCESS,
    payload
});

export const getUserChatListError = (error) => ({
    type: ACTION_TYPES.GET_USER_CHATS_LIST_ERROR,
    error
});



