import * as React from 'react';
import { 
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import { Entypo } from '@expo/vector-icons';

export default function CameraButton({title, icon, onPress, color}) {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={28} color={color ? color : '#F1F1F1'}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )

}