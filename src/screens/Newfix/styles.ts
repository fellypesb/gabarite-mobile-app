import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: '5%',
        alignItems: 'center'

    },

    containerText:{
        flex: 0.8,
        width: 320,
    },

    text:{
        width: 270,
        fontSize: 23,
        fontWeight: '600',
    },

    textSpan:{
        width: 300,
        fontSize: 23,
        fontWeight: '600',
        color: '#00B6AB'
    },

    cardImage:{
        width: 320,
        height: 266,
    },

    containerButton: {
        flex: 0.5,
        // backgroundColor: 'gray',
        flexDirection: 'row-reverse',
        width: 320,
        gap: 20
    }
});


