import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        const store = createStore(reducers);

        return (
            <Provider store={store}>
                <View>
                    <Text>Hello World</Text>
                </View>
            </Provider>
        );
    }
}

export default App;
