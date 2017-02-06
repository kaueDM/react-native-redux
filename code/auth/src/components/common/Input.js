import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                underlineColorAndroid='transparent'
                style={styles.textInputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    textInputStyle: {
        width: 100,
        height: 22,
        color: '#00DD7A',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        lineHeight: 26,
        flex: 2,
        borderWidth: 1,
        borderColor: '#000'
    },
    labelStyle: {
        color: '#00DD7A',
        fontWeight: '600',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
