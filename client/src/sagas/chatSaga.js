import {put} from 'redux-saga/effects';
import {getUserChats, getOneChat} from '../api/index';
import {getUserChatListSuccess, getUserChatListError, getCurrentChatSucess, getCurrentChatError} from '../actions/actionCreators';

export function* getUserChatSaga() {
    try {
        const result = yield getUserChats();
        // якщо запит був успішний - маємо згенерувати action з успішним статусом і результатом запиту
        const action = getUserChatListSuccess(result.data.data);
        // відправляємо екшн в редьюсер
        yield put(action);
    } catch(error) {
    // якщо запит був не успішний - маємо згенерувати action з статусом помилки і об'єктом помилки всередині
        const errorAction = getUserChatListError(error);
        yield put(errorAction);
    }
}


export function* getOneChatSaga(action) {
    /// робимо запит на api і опрацювання результату
    // action.payload має містити інфу про запитуваний чат
    try {
       const {data: {data}} = yield getOneChat(action.payload);
       const action = getCurrentChatSucess(data);
       yield put(action);
    } catch(error) {
        const errAction = getCurrentChatError(error);
        yield put(action);
    }
}


/*
Декомпозиція втілення нового функціоналу з api-запитом:

+1. створити 3 actionTypes для запиту, успішного результату запиту і неуспішного результату
+2. Створити actionCreators для цих трьох типів action
+3. Прописуємо у rootSaga ефект на перехоплення потрібного action
+4. Створюємо функцію-воркер, яка виконує запит на сервер і опрацьовує обидва випадки результату


*/