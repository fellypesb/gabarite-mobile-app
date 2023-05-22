import{ StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageBackground: {
        flex: 1,
        // resizeMode: "cover",
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },

    containerLogo: {
        flex: 1,
        // backgroundColor: 'red',
        alignItems: "center"
    },

    containerText: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        // backgroundColor: 'green'

    },

    containerForm: {
        flex: 2,
        // backgroundColor: 'green',
        alignItems: "center",
        marginTop: 30
    },

    input: {
            backgroundColor: 'white',
            borderRadius: 9,
            borderBottomWidth: 1,
            // position: 'absolute',
            width: 320,
            height: 40,
            padding: 10,
            margin: 10
    },

    title: {
        fontSize: 39,
        fontWeight: "bold",
    },

    subTitle: {
        // width: 213,
        marginBottom: 28,
        fontWeight: '600',
        justifyContent: 'center'
    },

    subTitleSpan:{
        // width: 300,
        // fontSize: 23,
        fontWeight: '600',
        color: '#00B6AB'
    },

    button: {
        // position: 'absolute',
        backgroundColor: '#00B2A8',
        borderRadius: 9,
        width: 123,
        height: 36,
        alignSelf: 'center',
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 21,
    },

    registerText1:{
        marginTop: 20,
    },

    buttonRegister: {
        borderBottomWidth: 1,
        borderColor: '#00B2A8',
    },

    registerText2: {
        color: '#00B2A8',
        fontWeight: '600',
        // fontSize: 12
    },

    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',

    },

    imageForeground: {
        width: 162,
        height: 157,
        borderRadius: 244
    }
  });