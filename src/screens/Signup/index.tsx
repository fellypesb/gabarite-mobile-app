import React, { useState } from 'react';
import { styles } from './styles';

import { 
  Text,
  TextInput, 
  View,
  TouchableOpacity,
} from 'react-native';


export function Signup({ navigation }) {

    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [education, setEducation] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pass2, setPass2] = useState('')
    

    function registerTeachers(){
      fetch('https://72cf-179-124-26-7.sa.ngrok.io/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: name,
          last_name: lname,
          education_institution: education,
          email: email,
          password: pass
        })
      })
      .then((response) => response.json())
      .then((json) => console.log(json));

      setName('')
      setLname('')
      setEducation('')
      setEmail('')
      setPass('')
      setPass2('')
    };

   

    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            CADASTRE-SE
          </Text>
          <View style={styles.containerForm}>
            <TextInput style={styles.input}
              inputMode='text'
              autoComplete='name'
              placeholder='Nome'
              value={name}
              onChangeText={text=>setName(text)}
            />
            
            <TextInput style={styles.input}
              inputMode='text'
              placeholder='Sobrenome'
              value={lname}
              onChangeText={text=>setLname(text)}
            />

            <TextInput style={styles.input}
              inputMode='text'
              placeholder='Instituição de Ensino'
              value={education}
              onChangeText={text=>setEducation(text)}
            />

            <TextInput style={styles.input}
              inputMode='email'
              autoComplete='email'
              placeholder='Email'
              value={email}
              onChangeText={text=>setEmail(text)}
            />

            <TextInput style={styles.input}
              autoComplete='password-new'
              secureTextEntry={true}
              placeholder='Senha'
              value={pass}
              onChangeText={text=>setPass(text)}
            />

            <TextInput style={styles.input}
              secureTextEntry={true}
              placeholder='Confirmar senha'
              value={pass2}
              onChangeText={text=>setPass2(text)}
            />

            <View style={styles.containerButton}>
              <TouchableOpacity 
                style={styles.buttonSave}
                onPress={() => [navigation.navigate('Login'), registerTeachers()]}
              >
                <Text style={styles.buttonTextSave}>
                  SALVAR
                </Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.buttonBack}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.buttonTextBack}>
                  VOLTAR
                </Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
    );
}