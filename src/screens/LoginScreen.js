import { View } from 'react-native';
import { LoginForm } from '../features/LoginForm'

export function LoginScreen({navigation, setUser}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginForm addUser={setUser} navigation={navigation}/>
      </View>
    );
  }