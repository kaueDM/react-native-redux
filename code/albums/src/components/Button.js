import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ buttonAction, children }) => {
    return (
        <TouchableOpacity
            onPress={buttonAction}
            style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#2b2b2b',
        borderRadius: 2,
        borderWidth: 3,
        borderColor: '#00DD7A',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#00DD7A',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
