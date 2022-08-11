import { View } from "react-native";
import { LoginForm } from "../features/LoginForm";

export function LoginScreen({ navigation, setUser, user }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LoginForm setUser={setUser} user={user} navigation={navigation} />
    </View>
  );
}
