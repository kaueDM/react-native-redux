import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    ComponentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAfKKcw4s360k38AQIMlgk8DjLw1YyuMCE',
            authDomain: 'auth-bd472.firebaseapp.com',
            databaseURL: 'https://auth-bd472.firebaseio.com',
            storageBucket: 'auth-bd472.appspot.com',
            messagingSenderId: '417740839478'
        });
    }
    render() {
        return (
            <View style={styles.appStyle}>
                <Header headerText="Login" />
                <LoginForm />
            </View>
        );
    }
}

const styles = {
    appStyle: {
        flex: 1,
        backgroundColor: '#2b2b2b'
    }
};

export default App;

