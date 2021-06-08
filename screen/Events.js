import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function EventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events!</Text>
      <Button
        title="You've won $1MM click here"
        onPress={() => navigation.navigate('EventsSecondScreen')}
      ></Button>
    </View>
  );
}

function EventsSecondScreen() {
  return <Text>Don't get Scammed</Text>;
}

const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Events' component={EventsScreen}></Stack.Screen>
      <Stack.Screen name='EventsSecondScreen' component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
