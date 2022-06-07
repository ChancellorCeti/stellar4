//import { Text, View } from 'react-native';

//import 'react-native-gesture-handler'
import * as React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DailyPic from './screens/DailyPic'
import Home from './screens/Home'
import StarMap from './screens/StarMap'
import SpaceCrafts from './screens/SpaceCrafts'
const Stack=createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;