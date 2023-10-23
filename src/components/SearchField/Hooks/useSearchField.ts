import { Dispatch, SetStateAction, useCallback } from 'react';

interface IUseSearchFieldParams {
  value?: string;
  onChangeText?: (text: string) => void;
  handleBlur?: () => void;
  setSearchedGifs: Dispatch<SetStateAction<IGifData[]>>;
}
export default (params: IUseSearchFieldParams) => {
  const { value, handleBlur, onChangeText, setSearchedGifs } = params;

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

  return {
    onSubmit,
    onCancelPressed,
  };
};
