import React, { useCallback } from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import { GifDetails, Home } from '~/screens';
import { HeaderBack } from '~/components';

const Stack = createStackNavigator<RootStackParamsList>();

const commonOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleContainerStyle: {
    paddingHorizontal: 4,
  },
  headerTitleStyle: {
    textTransform: 'capitalize',
  },
};

const RootNavigator = () => {
  const renderHeaderBack = useCallback(() => <HeaderBack />, []);
  return (
    <Stack.Navigator screenOptions={commonOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="GifDetails"
        component={GifDetails}
        options={{
          headerLeft: renderHeaderBack,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
