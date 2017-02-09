import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#00DD7A',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 40,
        color: '#fff'
    }
};

export { Header };
