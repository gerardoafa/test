import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text,
StyleSheet, KeyboardTypeOptions } from 'react-native';
type Props = {
type?: 'text' | 'email' | 'password' | 'number';
placeholder: string;
value: string;
onChange: (text: string) => void;
};
export default function CustomInput({ type = 'text', placeholder, value, onChange
}: Props) {
const [secure, setSecure] = useState(type === 'password');
const isPassword = type === 'password';
const icon: typeof MaterialIcons['name'] | undefined =
type === 'email' ? 'alternate-email' :
type === 'password' ? 'lock' :
type === 'number' ? 'phone-android' : undefined;
const keyboard: KeyboardTypeOptions =
type === 'email' ? 'email-address' :
type === 'number' ? 'phone-pad' : 'default';
const getError = () => {
if (type === 'email' && !value.includes('@')) return 'Correo invalido';
if (type === 'password' && value.length < 4) return 'Contrasena muy corta';
if (type === 'number' && value.length < 8) return 'Numero invalido';
};
const error = getError();
return (
<View style={styles.wrapper}>
<View style={[styles.container, error ? styles.errorBorder : null]}>
{icon && <MaterialIcons name={icon as any} size={22} color='#555' />}
<TextInput placeholder={placeholder} value={value} onChangeText={onChange}
style={styles.input} secureTextEntry={secure} keyboardType={keyboard} />
{isPassword && (
<TouchableOpacity onPress={() => setSecure(!secure)}>
<Ionicons name={secure ? 'eye' : 'eye-off'} size={22} />
</TouchableOpacity>
)}
</View>
{error && <Text style={styles.errorText}>{error}</Text>}
</View>
);
}
const styles = StyleSheet.create({
wrapper: { marginBottom: 12 },
container: { flexDirection: 'row', alignItems: 'center', borderWidth: 1,
borderColor: '#ccc', borderRadius: 10, backgroundColor: '#f0f0f0',
paddingHorizontal: 12, paddingVertical: 4 },
input: { flex: 1, paddingVertical: 10, paddingHorizontal: 8 },
errorBorder: { borderColor: 'red' },
errorText: { color: 'red', fontSize: 12, marginTop: 2 },
});