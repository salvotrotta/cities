import React from 'React';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style ={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignStyles: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: 600,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;

