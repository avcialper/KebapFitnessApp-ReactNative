import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import WelcomeScreen from "./pages/WelcomeScreen"
import MemberSign from "./pages/MemberSign"
import MemberResult from "./pages/MemberResult"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name='WelcomeScreen'
          component={WelcomeScreen}
        />
        <Stack.Screen 
          name='MemberSign'
          component={MemberSign}
        />
        <Stack.Screen 
          name='MemberResult'
          component={MemberResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App