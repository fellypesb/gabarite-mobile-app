import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Signup } from './src/screens/Signup';
import { Newfix } from './src/screens/Newfix';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {headerShown: false}
        }
      >
        <Stack.Screen 
          name='Login'
          component={Login}
        />
        <Stack.Screen name='Signup' component={Signup}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Newfix' component={Newfix}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}