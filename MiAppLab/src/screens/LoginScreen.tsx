import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = () => {
if (email && password.length >= 4) {
navigation.navigate('MainTabs', { email });
}
};

return (
<View style={styles.container}>
<Text style={styles.title}>Bienvenido a MiAppLab</Text>
<CustomInput placeholder='Correo electrónico' value={email} onChange={setEmail} />
<CustomInput placeholder='Contraseña' value={password} onChange={setPassword} />
<CustomButton title='Iniciar sesión' onPress={handleLogin} />
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, padding: 24, justifyContent: 'center' },
title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#5f0650' },
});
