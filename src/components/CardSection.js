import react from 'react';
import {view} from 'react-native';

const CardSection = () => {

    return (
        <View style={styles.cardSectionStyle}>
            {props.children}
        </View> 
    );
};

const styles = {
    cardSectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
}