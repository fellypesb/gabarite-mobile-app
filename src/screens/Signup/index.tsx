import { styles } from './styles';

import { 
  Text,
  TextInput, 
  View,
  TouchableOpacity,
} from 'react-native';


export function Signup() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            CADASTRE-SE
          </Text>
          <View style={styles.containerForm}>
            <TextInput style={styles.input}
              placeholder='Nome'
            />

            <TextInput style={styles.input}
              placeholder='Sobrenome'
            />

            <TextInput style={styles.input}
              placeholder='Instituição de Ensino'
            />

            <TextInput style={styles.input}
              placeholder='Email'
            />

            <TextInput style={styles.input}
              placeholder='Senha'
            />

            <TextInput style={styles.input}
              placeholder='Confirmar senha'
            />

            <View style={styles.containerButton}>
              <TouchableOpacity style={styles.buttonSave}>
                <Text style={styles.buttonTextSave}>
                  SALVAR
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonBack}>
                <Text style={styles.buttonTextBack}>
                  VOLTAR
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
    );
}