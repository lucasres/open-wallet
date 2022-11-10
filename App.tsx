import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MoneyContextProvider } from './src/Context/MoneyContext';
import { PrivacyContextProvider } from './src/Context/PrivacyContext';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import routes from './src/Routes';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PrivacyContextProvider>
      <MoneyContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {routes.map((r, i) => <Stack.Screen key={i}
              name={r.name}
              component={r.component}
              options={{headerShown: false}} />)}
          </Stack.Navigator>
        </NavigationContainer>
      </MoneyContextProvider>
    </PrivacyContextProvider>
  );
}
