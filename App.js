import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import SettingScreen from './src/screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import DrawerScreen from './src/components/DrawerScreen ';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

const HomeTab = createStackNavigator(
  {
    Home: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',

    },
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: SettingScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',

    },
  }
);




const Tabs = createBottomTabNavigator(
  {
    Home: HomeTab,
    Settings: SettingsTab,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (<Image
            source={require('./assets/home.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />)

        } else {
          return (<Image
            source={require('./assets/settings.png')}
            style={[styles.icon, { tintColor: tintColor }]}
          />)
        }

      }

      
      // tabBarIcon:({ focused, horizontal, tintColor })=>{
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   if (routeName === 'Home') {
      //     iconName = `ios-information-circle${focused ? '' : '-outline'}`;

      //   } else if (routeName === 'Settings') {
      //     iconName = `ios-options${focused ? '' : '-outline'}`;
      //   }

      //   // You can return any component that you like here! We usually use an
      //   // icon component from react-native-vector-icons
      //   return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      // }
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: IndexScreen
  },
  Settings: {
    screen: SettingScreen
  }
});

const DrawerNavigator = createDrawerNavigator({
  Home:{
      screen: Tabs
  }
},{
  initialRouteName: 'Home',
  //contentComponent: DrawerScreen,
  drawerWidth: 300
});
 //export default createAppContainer(navigator);
 //var App = createAppContainer(navigator);
var App = createAppContainer(Tabs);
//var App = createAppContainer(DrawerNavigator);
export default () => {
  return <BlogProvider><App /></BlogProvider>
};


