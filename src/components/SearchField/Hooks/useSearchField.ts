import { useCallback } from 'react';

interface IUseSearchFieldParams {
  onChangeText?: (text: string) => void;
  handleBlur?: () => void;
}
export default (params: IUseSearchFieldParams) => {
  const { handleBlur, onChangeText } = params;

  const onCancelPressed = useCallback(() => {
    onChangeText?.('');
    handleBlur?.();
  }, [onChangeText, handleBlur]);

  return {
    onCancelPressed,
  };
};
