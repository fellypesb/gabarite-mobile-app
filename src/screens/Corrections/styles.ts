import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 3,
    },
    
    containerTitles:{
        width: 320,
        height: 100,
        margin: '10%',
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },

    headingText:{
        fontSize: 26,
        fontWeight: '600',
    },

    textSubtitle:{
        paddingTop: '2%',
        fontWeight: '400',
    },

    item:{
        padding: 30,
        marginVertical: 4,
        marginHorizontal: 10,
        borderRadius: 6,
    },

    textHeadItem:{
        fontSize: 23,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },

    textDescriptionItem:{
        fontSize: 14,
        fontWeight: '400'
    },

    containerFlat:{
        maxHeight: 550,
        // backgroundColor: 'gray',
    },

    containerButtons:{
        flex: 1,
        flexDirection: 'row-reverse',
        marginHorizontal: 10,
        maxHeight: 70,
        // backgroundColor: 'gray'
    }

});