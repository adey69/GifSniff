import React from 'react';
import { Text, View } from 'react-native';
import { useGifInfo } from './Hooks';
import GifImage from '../GifImage';
import CustomButton from '../CustomButton';
import styles from './styles';

interface IGifInfoProps {
  isLoading?: boolean;
  gif?: IGifData;
}

const GifInfo = ({ gif, isLoading }: IGifInfoProps) => {
  const { handleLinkPressed, gifAgeLabel } = useGifInfo({ gif });
  return (
    <View>
      <View style={styles.gifContainer}>
        <GifImage gif={gif} isLoading={!!isLoading} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.gifTitle}>{gif?.title}</Text>
          <CustomButton onPress={handleLinkPressed}>
            <Text style={styles.gifLink}>{gif?.url}</Text>
          </CustomButton>
        </View>
        {gifAgeLabel !== 'g' && (
          <View style={styles.ageContainer}>
            <Text style={styles.age}>{gifAgeLabel}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default React.memo(GifInfo);
