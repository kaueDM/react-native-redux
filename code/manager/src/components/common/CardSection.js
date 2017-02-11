import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
    <View style={[styles.containerStyle, props.style]}>
        {props.children}
    </View>        
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#2b2b2b',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#3d3d3d',
        position: 'relative',
    }
};

export { CardSection };
