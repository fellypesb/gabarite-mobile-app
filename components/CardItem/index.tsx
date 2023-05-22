import React from 'react';
import { styles } from './styles';

import { 
    View,
    Text,
    Image,
    TouchableOpacity,
    Pressable 
} from 'react-native'


const CardItem = (props:any) => {
  const onPress = props.onPress;
  const backGroundColor = onPress === "selected" ? "#00B2A8" : "#EBEBEB";

  return (
    <TouchableOpacity 
      style={[styles.containerCards, {backgroundColor: backGroundColor}]}
    >
      <Text style={styles.cardText}>
          Listar correções já realizadas
      </Text>

      <Image 
          source={require('../../assets/iconHome1.png')}
          style={styles.cardImage}
      />
    </TouchableOpacity>
  )
}

export default CardItem