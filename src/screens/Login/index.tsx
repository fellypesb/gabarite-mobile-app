import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

import { 
  Text,
  TextInput, 
  View,
  TouchableOpacity,
  ImageBackground,
  Image 
} from 'react-native';


export function Login() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/background-login.png')} 
        style={styles.imageBackground}
      >
      <View style={styles.containerText}>
        <Text style={styles.title}>GABARITE</Text>
        <Text style={styles.subTitle}>Otimizando suas correções</Text>
      </View>
      <View style={styles.containerLogo}>
        <Image 
          source={require('../../../assets/image-login.png')}
          style={styles.imageForeground}
        />
      </View>
      <View style={styles.containerForm}>
        <TextInput style={styles.input}
          placeholder='Usuário'
        />

        <TextInput style={styles.input}
          
          secureTextEntry={true}
          placeholder='Senha'
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            ENTRAR
          </Text>
        </TouchableOpacity>
        <Text style={styles.registerText1}>
          Não possui uma conta?
        </Text>
        <TouchableOpacity style={styles.buttonRegister}>
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


