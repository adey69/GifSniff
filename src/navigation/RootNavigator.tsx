import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { GifDetails, Home } from '~/screens';
import { HeaderBack } from '~/components';

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  const renderHeaderBack = useCallback(() => <HeaderBack />, []);
  return (
    <Stack.Navigator>
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
