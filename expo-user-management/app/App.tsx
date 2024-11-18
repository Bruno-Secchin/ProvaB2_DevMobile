import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Oculta o header na tela de login
        />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Registrar" }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: "Recuperar Senha" }} />
        <Stack.Screen name="Home" component={Home} options={{ title: "Principal" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
