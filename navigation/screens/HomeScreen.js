import React, { useState, useEffect } from "react";
import { scale } from "react-native-size-matters";
import { Button, Text } from "react-native";
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Red from "./Home";
import Blue from "./Desc";
import Yellow from "./back1";
import back2 from "./back2";
import back3 from "./back3";
import { Provider } from "react-native-paper";

// import Braingauge from "./Braingauge";
// import { DrawerContent } from "./components/DrawerContent";

const headerStyle = {
  backgroundColor: "orange",
};

function Root() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Blue"
        component={Blue}
        options={{
          headerLeft: null,
          title: "Blue",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />

<Stack.Screen
        name="back2"
        component={back2}
        options={{
         // headerLeft: null,
          title: "back2",
          headerTitleAlign: "center",
          headerStyle,
         headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />

<Stack.Screen
        name="back3"
        component={back3}
        options={{
         // headerLeft: null,
          title: "back3",
          headerTitleAlign: "center",
          headerStyle,
         headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
      
      <Stack.Screen
        name="Yellow"
        component={Yellow}
        options={{
          title: "Yellow",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
      <Stack.Screen
        name="Red"
        component={Red}
        options={{
          title: "Red",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />
    </Stack.Navigator>
  );
}

export const Navigators = ({ navigation }) => {
  const MainStack = createStackNavigator();
  const MainStackScreen = () => (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Red"
        component={Red}
        IconBar
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />
<MainStack.Screen
        name="back2"
        component={back2}
        IconBar
        options={{
          title: "Background-2",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />
      <MainStack.Screen
        name="back3"
        component={back3}
        IconBar
        options={{
          title: "Background-3",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />

      <MainStack.Screen
        name="Blue"
        component={Blue}
        options={{
          title: "Description",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(12),
          },
        }}
      />

     
      <MainStack.Screen
        name="Yellow"
        component={Yellow}
        IconBar
        options={{
          //headerShown: false,
          title: "Background-1",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />

      <MainStack.Screen
        name="Root"
        component={Root}
        IconBar
        options={{
          headerShown: false,
          title: "Root",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(12),
          },
          headerTintColor: "white",
        }}
      />
    </MainStack.Navigator>
  );

  return (
    <Provider>
      <MainStackScreen />
    </Provider>
  );
};

export default Navigators;
