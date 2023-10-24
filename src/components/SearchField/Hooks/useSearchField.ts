import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Animated } from 'react-native';

interface IUseSearchFieldParams {
  isSearchFocused: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  handleBlur?: () => void;
  setSearchedGifs: Dispatch<SetStateAction<IGifData[]>>;
}
export default (params: IUseSearchFieldParams) => {
  const { value, isSearchFocused, handleBlur, onChangeText, setSearchedGifs } =
    params;
  const cancelWidth = useRef(new Animated.Value(0)).current;
  const cancelOpacity = useRef(new Animated.Value(0)).current;
  const cancelTranslateX = useRef(new Animated.Value(0)).current;

  const onCancelPressed = useCallback(() => {
    setSearchedGifs([]);
    onChangeText?.('');
    handleBlur?.();
  }, [onChangeText, handleBlur, setSearchedGifs]);

  const onSubmit = useCallback(() => {
    if (value?.length === 0) {
      setSearchedGifs([]);
      handleBlur?.();
    }
  }, [value, handleBlur, setSearchedGifs]);

  const handleCancelAnimation = useCallback(
    (toValue: number) => {
      Animated.parallel([
        Animated.timing(cancelWidth, {
          toValue,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(cancelTranslateX, {
          toValue: toValue === 70 ? 0 : 70,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(cancelOpacity, {
          toValue: toValue === 70 ? 1 : 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    },
    [cancelWidth, cancelOpacity, cancelTranslateX],
  );

  useEffect(() => {
    if (isSearchFocused) {
      handleCancelAnimation(70);
    } else {
      handleCancelAnimation(0);
    }
  }, [isSearchFocused, handleCancelAnimation]);

  return {
    cancelWidth,
    cancelOpacity,
    cancelTranslateX,
    onSubmit,
    onCancelPressed,
    handleCancelAnimation,
  };
};
