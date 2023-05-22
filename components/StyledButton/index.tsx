import React, { Component } from 'react';

import { styles } from './styles';

import { 
    Text, 
    TouchableOpacity
} from 'react-native';

export function StyledButton (props:any) {

    const type = props.type;
    const content = props.content;

    const backgroundColor = type === 'primary' ? '#00B2A8': '#F6F6F6'; 
    const textColor = type === 'secundary' ? '#00B2A8': 'black';
    return (
    <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor}]}>
        <Text style={[styles.buttonText, {color: textColor}]}>
          {content}
        </Text>
    </TouchableOpacity>
    )
};