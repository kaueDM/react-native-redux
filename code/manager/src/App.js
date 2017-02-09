import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAQk37kf3CkOLJvj11VS4WeXDcaKgghkOk',
            authDomain: 'manager-eefd4.firebaseapp.com',
            databaseURL: 'https://manager-eefd4.firebaseio.com',
            storageBucket: 'manager-eefd4.appspot.com',
            messagingSenderId: '352690278772'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={styles.appStyle}>
                    <LoginForm />
                </View>
            </Provider>
        );
    }
}

const styles = {
    appStyle: {
        backgroundColor: '#2b2b2b',
        flex: 1
    }
};

export default App;
