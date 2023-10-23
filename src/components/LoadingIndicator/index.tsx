import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native';
import styles from './styles';

const LoadingIndicator = (props: ActivityIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator {...props} size={'large'} />
    </View>
  );
};

export default React.memo(LoadingIndicator);
