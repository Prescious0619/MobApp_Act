import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

const MyButton = ({ text, action, mode, size }) => {
  let style = null;

  switch (size) {
    case 'small':
      style = { ...btnStyle.buttonSmall, backgroundColor: '#0077B6' };
      break;
    case 'medium':
      style = { ...btnStyle.buttonMedium, backgroundColor: '#0077B6' };
      break;
    case 'large':
      style = { ...btnStyle.buttonLarge, backgroundColor: '#0077B6' };
      break;
    default:
      style = { ...btnStyle.buttonMedium, backgroundColor: '#0077B6' };
      break;
  }

  return (
    <Button
      contentStyle={style}
      labelStyle={{ color: 'white' }} 
      mode={mode}
      onPress={() => action()}
    >
      {text}
    </Button>
  );
};

export default MyButton;

const btnStyle = {
  buttonSmall: {
    height: 50,
    justifyContent: 'center',
  },
  buttonMedium: {
    height: 60,
    justifyContent: 'center',
  },
  buttonLarge: {
    height: 70,
    justifyContent: 'center',
  },
};
