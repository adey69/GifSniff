type RootStackParamsList = {
  Home: undefined;
  GifDetails: {
    gif: IGifData;
  };
};

type RootStackNavigationProp =
  import('@react-navigation/stack').StackNavigationProp<RootStackParamsList>;

type GifDetailsRouteProp = import('@react-navigation/native').RouteProp<
  RootStackParamsList,
  'GifDetails'
>;
