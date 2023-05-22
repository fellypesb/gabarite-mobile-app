import React from 'react';
import { styles } from './styles';

import { 
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'


const CardItem = (props:any) => {
  const onPress = props.onPress;
  const content = props.content;
  const icon = props.icon;
  const backGroundColor = onPress === "selected" ? "#00B2A8" : "#EBEBEB";

  return (
    <TouchableOpacity 
      style={[styles.containerCards, {backgroundColor: backGroundColor}]}
    >
      <Text style={styles.cardText}>
        {content}
      </Text>

      <Image 
          source={require(`../../assets/${icon}.png`)}
          style={styles.cardImage}
      />
    </TouchableOpacity>
  )
}

export default CardItem