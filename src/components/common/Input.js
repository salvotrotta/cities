import React from 'react';
import { TextInput, Text, View} from 'react-native';

const Input = (props) => {
    return ( 
        <View>
            <Text>{props.lable}</Text>
            <TextInput 
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

const style = {
    inputStyle: {
        color:'#000',
        fontSize: 18,
        lineHeight: 23,
        paddingRight: 5,
        paddingLeft: 5,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle: {
        heigh: 40,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input; 