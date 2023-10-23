import React, {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
} from 'react';
import { Animated, Text, TextInput, TextInputProps, View } from 'react-native';
import SearchSvg from '~/assets/svg/search.svg';
import CloseSvg from '~/assets/svg/close.svg';
import styles from './styles';
import { APP_TEXT } from '~/strings';
import CustomButton from '../CustomButton';
import { useSearchField } from './Hooks';

interface ISearchFieldProps extends TextInputProps {
  isSearchFocused: boolean;
  onFieldPressed: () => void;
  handleBlur: () => void;
  setSearchedGifs: Dispatch<SetStateAction<IGifData[]>>;
}

const SearchField = forwardRef(
  (props: ISearchFieldProps, ref: ForwardedRef<TextInput>) => {
    const {
      isSearchFocused,
      value,
      onFieldPressed,
      handleBlur,
      onChangeText,
      setSearchedGifs,
    } = props;
    const { cancelWidth, onSubmit, onCancelPressed } = useSearchField({
      value,
      isSearchFocused,
      handleBlur,
      onChangeText,
      setSearchedGifs,
    });

    return (
      <View style={styles.container}>
        <CustomButton
          style={styles.internalContainer}
          onPress={onFieldPressed}
          activeOpacity={1}>
          <SearchSvg width={20} height={20} />
          <TextInput
            {...props}
            ref={ref}
            style={styles.inputContainer}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={APP_TEXT.search}
            onSubmitEditing={onSubmit}
          />
          {isSearchFocused && value && value?.length > 0 && (
            <CustomButton
              style={styles.closeIcon}
              onPress={() => onChangeText?.('')}>
              <CloseSvg width={14} height={14} />
            </CustomButton>
          )}
        </CustomButton>
        <Animated.View
          style={{
            width: cancelWidth,
          }}>
          <CustomButton style={styles.cancelButton} onPress={onCancelPressed}>
            <Text>{APP_TEXT.cancel}</Text>
          </CustomButton>
        </Animated.View>
      </View>
    );
  },
);

export default React.memo(SearchField);
