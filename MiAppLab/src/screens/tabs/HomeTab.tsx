import { View, Text, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TabsParamList } from '../../navigation/TabsNavigator';
import CustomButton from '../../components/CustomButton';
type Props = BottomTabScreenProps<TabsParamList, 'Inicio'>;
export default function HomeTab({ route, navigation }: Props) {
const { email } = route.params;
return (
<View style={styles.container}>
<Ionicons name='home' size={64} color='#5f0650' />
<Text style={styles.title}>Bienvenido/a</Text>
<Text style={styles.email}>{email}</Text>
<Text style={styles.desc}>Usa las pestanas de abajo para navegar</Text>
<CustomButton title='Ir a Calcular IMC'
onPress={() => navigation.navigate('IMC')}
variant='secondary' />
</View>
);
}
const styles = StyleSheet.create({
container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24
},
title: { fontSize: 28, fontWeight: 'bold', marginTop: 16, color: '#5f0650' },
email: { fontSize: 16, color: '#555', marginBottom: 12 },
desc: { textAlign: 'center', color: '#888', marginBottom: 24 },
});