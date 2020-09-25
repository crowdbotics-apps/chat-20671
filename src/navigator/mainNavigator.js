import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList109677Navigator from '../features/NotificationList109677/navigator';
import Settings109676Navigator from '../features/Settings109676/navigator';
import Settings109668Navigator from '../features/Settings109668/navigator';
import UserProfile109666Navigator from '../features/UserProfile109666/navigator';
import UserProfile109635Navigator from '../features/UserProfile109635/navigator';
import Tutorial109634Navigator from '../features/Tutorial109634/navigator';
import NotificationList109606Navigator from '../features/NotificationList109606/navigator';
import Settings109605Navigator from '../features/Settings109605/navigator';
import Settings109597Navigator from '../features/Settings109597/navigator';
import UserProfile109595Navigator from '../features/UserProfile109595/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList109677: { screen: NotificationList109677Navigator },
Settings109676: { screen: Settings109676Navigator },
Settings109668: { screen: Settings109668Navigator },
UserProfile109666: { screen: UserProfile109666Navigator },
UserProfile109635: { screen: UserProfile109635Navigator },
Tutorial109634: { screen: Tutorial109634Navigator },
NotificationList109606: { screen: NotificationList109606Navigator },
Settings109605: { screen: Settings109605Navigator },
Settings109597: { screen: Settings109597Navigator },
UserProfile109595: { screen: UserProfile109595Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
