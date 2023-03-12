import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as NavigationBar from "expo-navigation-bar";

import { Home } from "./src/pages/home";
import { Todo } from "./src/pages/todo";

export const Routes = () => {
  const { backGroundColor } = useSelector((state) => state.theme);
  const Stack = createNativeStackNavigator();

  const showColor = async (themeColor) => {
    if (themeColor) {
      await NavigationBar.setBackgroundColorAsync(themeColor);
    }
  };

  useEffect(() => {
    showColor(backGroundColor);
  }, [backGroundColor]);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Default" component={Todo} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
