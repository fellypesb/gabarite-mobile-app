import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 2,
        alignItems: 'center',
    },
    
    title:{
        fontSize: 23,
        fontWeight: "600",
        margin: 20    
    },

    containerCards: {
        flex: 0.7,
        gap: 22,
        // backgroundColor: 'red'
    },

    containerButton: {
        flex: 0.1,
        flexDirection: 'row-reverse',
        gap: 24,
        padding: 0,
        width: 400,
        // backgroundColor: 'blue',
    },

    cardImage: {
        width: 92,
        height: 92
    },

    footer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 340,
        bottom: '3%',
        // backgroundColor: 'gray',
    },

    footerText: {
        fontSize: 12,
        fontWeight: "600",
        // backgroundColor: 'red'
    }

});