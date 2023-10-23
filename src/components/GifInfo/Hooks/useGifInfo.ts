import { useMemo } from 'react';
import { Linking } from 'react-native';

interface IUseGifInfoParams {
  gif?: IGifData;
}

export default ({ gif }: IUseGifInfoParams) => {
  const handleLinkPressed = async () => {
    const url = gif?.url ?? '';
    const canOpenUrl = await Linking.canOpenURL(url);
    if (canOpenUrl) {
      Linking.openURL(url);
    }
  };

  const gifAgeLabel = useMemo(() => {
    const rating = gif?.rating ?? 'g';
    switch (rating) {
      case 'r':
        return '16+';
      case 'g':
      case 'pg':
      case 'pg-13':
        return rating;
      default:
        return rating;
    }
  }, [gif]);

  return {
    gifAgeLabel,
    handleLinkPressed,
  };
};
