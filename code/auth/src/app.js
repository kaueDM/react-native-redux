import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAfKKcw4s360k38AQIMlgk8DjLw1YyuMCE',
            authDomain: 'auth-bd472.firebaseapp.com',
            databaseURL: 'https://auth-bd472.firebaseio.com',
            storageBucket: 'auth-bd472.appspot.com',
            messagingSenderId: '417740839478'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner />;
        }
    }

    render() {
        return (
            <View style={styles.appStyle}>
                <Header headerText="Login" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    appStyle: {
        flex: 1,
        backgroundColor: '#2b2b2b',
    }
};

export default App;

