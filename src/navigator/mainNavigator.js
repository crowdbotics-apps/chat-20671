import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList109606Navigator from '../features/NotificationList109606/navigator';
import Settings109605Navigator from '../features/Settings109605/navigator';
import Settings109597Navigator from '../features/Settings109597/navigator';
import UserProfile109595Navigator from '../features/UserProfile109595/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
