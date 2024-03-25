import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {getUserChatSaga, getOneChatSaga} from './chatSaga';
import {getUserDataSaga} from './authSaga';

function* rootSaga() {
    yield takeLatest(ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST, getUserChatSaga);
    yield takeLatest(ACTION_TYPES.GET_USER_DATA_REQUEST, getUserDataSaga);
    yield takeLatest(ACTION_TYPES.GET_CURRENT_CHAT_REQUEST, getOneChatSaga);
}

export default rootSaga;



/*
Saga - функції-генератори, які перехоплюють action, і якщо він потрібного типу - запускають певну роботу
(делегуємо роботу генератору-воркеру)


*/