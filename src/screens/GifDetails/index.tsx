import React from 'react';
import { View } from 'react-native';
import { GifInfo } from '~/components';
import styles from './styles';
import { useGifDetails } from './Hooks';

const GifDetails = () => {
  const { gif } = useGifDetails();
  return (
    <View style={styles.container}>
      <GifInfo gif={gif} />
    </View>
  );
};

export default GifDetails;
