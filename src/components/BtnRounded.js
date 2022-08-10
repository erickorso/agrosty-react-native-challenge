import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { colors } from '../utils/colors';

export const BtnRounded = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
    radius: {
      borderRadius: 5,
      width: size,
      height: 50,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: colors.green,
      backgroundColor: colors.green,
      borderWidth: 2
    },
    text: { color: colors.white, fontSize: 20 },
  });