import React from 'react';
import CustomButton from '../CustomButton';
import BackSvg from '~/assets/svg/back.svg';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const HeaderBack = () => {
  const navigation = useNavigation();
  return (
    <CustomButton
      onPress={navigation.goBack}
      hitSlop={styles.hitSlop}
      style={styles.container}>
      <BackSvg width={20} height={20} />
    </CustomButton>
  );
};

export default React.memo(HeaderBack);
