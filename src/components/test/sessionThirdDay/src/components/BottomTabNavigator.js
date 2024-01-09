import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
// import {settingIcon} from '../assets';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
    //   screenOptions={({route}) => ({
    //     tabBarIcon: ({focused, color, size}) => {
    //       let iconName;

    //       if (route.name === 'Home') {
    //         iconName = focused
    //           ? 'ios-information-circle'
    //           : 'ios-information-circle-outline';
    //       } else if (route.name === 'Settings') {
    //         iconName = focused ? 'ios-list' : 'ios-list-outline';
    //       }

    //       // You can return any component that you like here!
    //       return <Image source={settingIcon} style={{height: 20, width: 20}} />;
    //     },
    //     tabBarActiveTintColor: 'tomato',
    //     tabBarInactiveTintColor: 'gray',
    //   })}>
    >``
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;