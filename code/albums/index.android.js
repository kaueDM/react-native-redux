import React from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={styles.appStyle}>
    <Header headerText={'Álbuns'} />
    <AlbumList />
  </View>
);

const styles = {
  appStyle: {
    flex: 1,
    backgroundColor: '#2b2b2b'
  }
};

AppRegistry.registerComponent('albums', () => App);
