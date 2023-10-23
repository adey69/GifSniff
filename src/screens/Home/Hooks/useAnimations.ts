import { useRef } from 'react';
import { Animated } from 'react-native';

export default () => {
  const cancelTranslateX = useRef(new Animated.Value(100)).current;

  const handleCancelAnimation = () => {
    Animated.timing(cancelTranslateX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return {
    handleCancelAnimation,
  };
};
