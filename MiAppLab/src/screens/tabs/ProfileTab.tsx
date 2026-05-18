import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigation/TabsNavigator';
import CustomButton from '../../components/CustomButton';
import { navigationRef } from '../../navigation/NavigationService';
type Props = BottomTabScreenProps<TabsParamList, 'Perfil'>;
export default function ProfileTab({ route }: Props) {
const { email } = route.params;
const handleLogout = () => {
if (navigationRef.isReady()) {
navigationRef.reset({ index: 0, routes: [{ name: 'Login' }] });
}
};
return (
<View style={styles.container}>
<Ionicons name='person-circle' size={100} color='#5f0650' />
<Text style={styles.name}>Mi Perfil</Text>
<Text style={styles.email}>{email}</Text>
<CustomButton title='Cerrar sesion' onPress={handleLogout} variant='danger'
/>
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24
},
name: { fontSize: 26, fontWeight: 'bold', marginTop: 12, color: '#5f0650' },
email: { fontSize: 16, color: '#555', marginBottom: 32 },
});