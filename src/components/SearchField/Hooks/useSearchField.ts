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
      Animated.timing(cancelWidth, {
        toValue,
        duration: 200,
        useNativeDriver: false,
      }).start();
    },
    [cancelWidth],
  );

  useEffect(() => {
    if (isSearchFocused) {
      handleCancelAnimation(100);
    } else {
      handleCancelAnimation(0);
    }
  }, [isSearchFocused, handleCancelAnimation]);

  return {
    cancelWidth,
    onSubmit,
    onCancelPressed,
    handleCancelAnimation,
  };
};
