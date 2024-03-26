import ACTION_TYPES from "../actions/actionTypes";


const initialStates = []

function chatListReducer(state = initialStates, action) {
    switch(action.type) {
        case ACTION_TYPES.GET_USER_CHATS_LIST_SUCESS: {
            return action.payload;
        }
        default: {
            return state
        }
    }
}

export default chatListReducer;