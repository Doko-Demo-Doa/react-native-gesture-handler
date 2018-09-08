import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BaseButton } from '../../GestureHandler';

const Button = (props) => {
  return <BaseButton {...props}>
    {props.children}
  </BaseButton>;
};

module.exports = Button;
