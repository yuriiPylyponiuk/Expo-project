import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import { Home } from "./src/pages/home";
import { Todo } from "./src/pages/todo";
import { store } from "./src/redux/configStore";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DefaulteToDo" component={Todo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
