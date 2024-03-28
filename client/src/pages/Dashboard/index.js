// Сторінка чату
import React, {useState, useContext} from 'react';
import {connect} from 'react-redux';
import DialogList from '../../components/DialogList';
import Chat from '../../components/Chat';
import MessageArea from '../../components/MessageArea';
import styles from './Dashboard.module.css';
 import { addNewMessageRequest } from '../../actions/actionCreators';


const Dashboard = (props) => {
   


    return (
            <main className={styles['messenger-wrapper']}>
                <DialogList />
                <section className={styles.container}>
                    <Chat />
                    <MessageArea/>
                </section>
            </main>
    );
}

export default Dashboard;
