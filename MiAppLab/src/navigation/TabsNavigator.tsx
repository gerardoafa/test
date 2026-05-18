import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './StackNavigator';

import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

// 1. Tipado de los tabs (qué parámetros recibe cada pantalla)
export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

// 2. Tipo para recibir el email desde el StackNavigator
type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: Props) {
  const { email } = route.params; // email que viene del Login

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          // 3. Ícono distinto según la pestaña activa
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Inicio') iconName = 'home';
          if (route.name === 'IMC')    iconName = 'fitness';
          if (route.name === 'Perfil') iconName = 'person';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={HomeTab}    initialParams={{ email }} />
      <Tab.Screen name="IMC"    component={IMCTab} />
      <Tab.Screen name="Perfil" component={ProfileTab} initialParams={{ email }} />
    </Tab.Navigator>
  );
}