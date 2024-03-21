// Сторінка чату
import React, {useState, useContext} from 'react';
import {connect} from 'react-redux';
import DialogList from '../../components/DialogList';
import Chat from '../../components/Chat';
import MessageArea from '../../components/MessageArea';
import styles from './Dashboard.module.css';
import ChatContext from '../../contexts/ChatContext';
import {addNewMessage} from '../../api/index';
import UserContext from '../../contexts/UserContext';
import { addNewMessage } from '../../actions/actionCreators';


const Dashboard = () => {
    // const [currentChat, setCurrentChat] = useState();
    // const user = useContext(UserContext);

    const sendNewMessage = (text) => {
        const apiObj = {
            chatId: props.currentChat?._id,
            message: {
                author: props.user._id,
                body: text
            }
        }
        props.addMessage(apiObj)
        // };
        // props.dispatch(addNewMessage(apiObj))
        // addNewMessage(apiObj)
        // .then(({data: {data}}) => {
        //     const chat = {
        //         ...currentChat,
        //         messages: [...currentChat.messages, data]
        //     };
        //     setCurrentChat(chat)
        // })
    }



    return (
        <ChatContext.Provider value={[currentChat, setCurrentChat]}>
            <main className={styles['messenger-wrapper']}>
                <DialogList />
                <section className={styles.container}>
                    <Chat />
                    <MessageArea sendData={sendNewMessage}/>
                </section>
            </main>
        </ChatContext.Provider>
    );
}

// export default Dashboard;

const mapStateToProps = ({user, currentChat}) => ({user, currentChat})

// const mapDispatchToProps = () => {
//     return {
//         addMessage: (data) => dispatch(addNewMessage(data))
//     }
// }

const mapDispatchToProps = {
    addMessage: addNewMessage
}

export default connect(mapStateToProps)(Dashboard)