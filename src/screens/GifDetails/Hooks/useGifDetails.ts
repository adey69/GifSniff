import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

export default () => {
  const { params } = useRoute<GifDetailsRouteProp>();
  const { gif } = params;
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: gif?.title,
    });
  }, [navigation, gif]);

  return {
    gif,
  };
};
