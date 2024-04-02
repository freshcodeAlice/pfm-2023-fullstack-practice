import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {unstable_HistoryRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UserContext from './contexts/UserContext';
 import history from './history';
import './reset.css';
import {connect} from 'react-redux';
import {getUserDataRequest} from './actions/actionCreators'
// import { getUserData } from './api';

function App(props) {


  useEffect(() => {

    if (!props.user && localStorage.getItem('accessToken')) {
      // ідемо за юзером.
      // якщо отримуємо її - кладемо у стейт    
      // console.log('getUserData')
      // getUserData()
      // .then(({data: {data}}) => {
      //     // у нас є в пропсах функція dispatch
      //     const action = {
      //       type: 'GET_USER_DATA',
      //       payload: data
      //     }
      //     props.dispatch(action)
      // })
      // .catch(error => {
      //   const action = {
      //     type: 'USER_DATA_ERROR_FETCHING',
      //     error
      //   }
      //   props.dispatch(action)
      // })

      props.getUserDataRequest()


    }   
  }, []);


  useEffect(() => {
    if(props.notification) {
      const {body, createdAt, type} = props.notification;
      toast[type](body, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  
    }
   
  }, [props.notification])

  return (
    <>
   <Router history={history}>
      <Routes>
        <Route path='/' exact element={<Home/>} />
         <Route path='/messenger' element={<Dashboard />} />
      </Routes>
    </Router>
    <ToastContainer />
    {props.error && <p>Ooops, something goes wrong</p>}
    </>
  );
}

const mapStateToProps = ({user, error, notification}) => ({user, error, notification})
  // визначає, яка частина стора нам потрібна тут!

  const mapDispatch = {
    getUserDataRequest
  }

export default connect(mapStateToProps, mapDispatch)(App);




/*

Redux - стейт-менеджер для JS-додатків

store - сховище стану додатку. Єдине джерело істини для всього додатку. Створюється за допомогою функції createStore

dispatch - функція для доставки об'єкту action в редьюсер 

React-redux

<Provider> - реакт-компонента, яка "роздає" значення стору всім підписаним на неї компонентам. Зазвичай огортаємо нею весь додаток

connect(mapStateToProps, )(Component) - це функція, що повертає HOC, який передає компоненті в пропси вибрану частину стейту і огорнуті діспатчем функції

mapStateToProps - це функція, яка приймає весь об'єкт стану в сторі і повертає ту частину, яка потрібна цій компоненті

mapDispatchToProps - (функція, яка повертає об'єкт) або об'єкт, який містить огорнуті dispatch-ем об'єкти action


Пишемо самі:

reducer - чиста js-функція, яка отримує поточний стан стору і об'єкт action, на основі чого визначає як змінити стан додатку і повертає новий об'єкт стану в стор 

action - js-об'єкт, який містить інформацію про те, що відбулося і додаткове корисне навантаження (опціонально)

*/