import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    
    title:{
        fontSize: 23,
        fontWeight: "600",
        marginTop: '15%'    
    },

    textHeadItem:{
        width: 280,
        fontSize: 23,
        fontWeight: '600',
    },

    containerCards: {
        flex: 0.7,
        gap: 22,
        // backgroundColor: 'red'
    },

    containerFlat:{
        flex: 2,
        flexDirection: 'row',
        width: 400,
        maxHeight: 500,
        borderRadius: 6,
        // backgroundColor: 'gray',
    },

    item:{
        flexDirection: 'row',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 3,
        borderRadius: 6,
        height: 150,
    },


    containerButton: {
        flex: 3,
        flexDirection: 'row-reverse',
        gap: 24,
        padding: 0,
        width: 400,
        maxHeight: 50,
        marginHorizontal: 3,
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
        bottom: '1%',
        // backgroundColor: 'gray',
    },

    footerText: {
        fontSize: 12,
        fontWeight: "600",
        // backgroundColor: 'red'
    },

   
});