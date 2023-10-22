import React, { ForwardedRef, forwardRef } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import SearchSvg from '~/assets/svg/search.svg';
import CloseSvg from '~/assets/svg/close.svg';
import styles from './styles';
import { APP_TEXT } from '~/strings';
import CustomButton from '../CustomButton';
import { useSearchField } from './Hooks';

interface ISearchFieldProps extends TextInputProps {
  onFieldPressed: () => void;
  handleBlur: () => void;
}

const SearchField = forwardRef(
  (props: ISearchFieldProps, ref: ForwardedRef<TextInput>) => {
    const { value, onFieldPressed, handleBlur, onChangeText } = props;
    const { onCancelPressed } = useSearchField({ handleBlur, onChangeText });
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
            onSubmitEditing={handleBlur}
            onBlur={handleBlur}
          />
          {ref?.current?.isFocused() && value && value?.length > 0 && (
            <CustomButton
              style={styles.closeIcon}
              onPress={() => onChangeText?.('')}>
              <CloseSvg width={14} height={14} />
            </CustomButton>
          )}
        </CustomButton>
        {ref?.current?.isFocused() && (
          <CustomButton style={styles.cancelButton} onPress={onCancelPressed}>
            <Text>{APP_TEXT.cancel}</Text>
          </CustomButton>
        )}
      </View>
    );
  },
);

export default SearchField;