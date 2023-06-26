import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { styles } from './styles';

import { 
  Text,
  TextInput, 
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert 
} from 'react-native';


export function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function login(){
    
    fetch('https://c66f-179-124-25-15.sa.ngrok.io/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        email: email,
        password: pass
      })
    })
    .then((response) => errorCheking(response))
    .then((json) => console.log(json))
    
  };

  function errorCheking(resp){
    if(resp.ok){
      setEmail('')
      setPass('')
      navigation.navigate('Home')
    }

    if(resp.status === 400){
      Alert.alert('Ops! \nEmail ou senha incorretos')
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/background-login.png')} 
        style={styles.imageBackground}
      >
      <View style={styles.containerText}>
        <Text style={styles.title}>GABARITE</Text>
        <Text style={styles.subTitle}>Otimizando suas <Text style={styles.subTitleSpan}>correções</Text></Text>
      </View>
      <View style={styles.containerLogo}>
        <Image 
          source={require('../../../assets/image-login.png')}
          style={styles.imageForeground}
        />
      </View>
      <View style={styles.containerForm}>
        <TextInput style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={text=>setEmail(text)}
        />

        <TextInput style={styles.input}
          secureTextEntry={true}
          placeholder='Senha'
          value={pass}
          onChangeText={text=>setPass(text)}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => login()}
        >
          <Text style={styles.buttonText}>
            ENTRAR
          </Text>
        </TouchableOpacity>
        <Text style={styles.registerText1}>
          Não possui uma conta?
        </Text>
        <TouchableOpacity 
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.registerText2}>
            Cadastre-se aqui
          </Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}


