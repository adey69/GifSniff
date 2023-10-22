import React from 'react';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { ActivityIndicator, View } from 'react-native';
import { Images } from '~/assets';

interface IGifImageProps {
  gif?: IGifData;
  isLoading: boolean;
}

const GifImage = ({ gif, isLoading }: IGifImageProps) => {
  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.loader}
          animating
          size={'large'}
          color={'green'}
        />
      )}
      <FastImage
        style={styles.randomGif}
        source={{
          uri: gif?.images?.original?.url,
        }}
        resizeMode={FastImage.resizeMode.cover}
        defaultSource={Images.gifPlaceholder}
      />
    </View>
  );
};

export default React.memo(GifImage);
