import{ StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        paddingTop:68,
        // backgroundColor: 'red',
    },

    title:{
        fontSize: 29,
        fontWeight: "400",
    },

    containerForm:{
        flex:2,
        // backgroundColor: 'green',
    },

    input:{
        // backgroundColor: 'white',
        // borderRadius: 9,
        borderBottomWidth: 2,
        // position: 'absolute',
        width: 320,
        height: 40,
        padding: 10,
        margin: 10,
        placeholderTextColor: 'gray',
        outlineStyle: 'none'
    },

    containerButton: {
        flex: 0.6,
        flexDirection: 'row-reverse',
        gap: 24,
        // backgroundColor: 'gray',
        marginTop: 29
        
    },

    buttonSave:{
        // position: 'absolute',
        backgroundColor: '#00B2A8',
        borderRadius: 9,
        width: 123,
        height: 36,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonBack:{
        // position: 'absolute',
        backgroundColor: '#F6F6F6',
        borderColor: '#00B2A8',
        borderWidth: 2,
        borderRadius: 9,
        width: 123,
        height: 36,
        alignSelf: 'center',
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonTextSave: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    buttonTextBack: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#00B2A8',
    },

});