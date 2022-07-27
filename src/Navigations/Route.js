import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthenticationScreen from "./AuthenticationScreen";
import LoadingScreen from "./LoadingScreen";

const Stack = createNativeStackNavigator();


/* Navigation between Screens 
** If the user typed in valid value then navigate to AuthenticationScreen
** else navigate to LoadingScreen
*/
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        {false ? LoadingScreen(Stack) : AuthenticationScreen(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
