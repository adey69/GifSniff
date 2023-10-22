import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

const CustomButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} {...props}>
      {props?.children}
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
