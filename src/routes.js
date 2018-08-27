import React from "react";
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions
} from "react-navigation";
import { Icon } from "react-native-elements";
import { colors } from "./config";
import LoginScreen from "./screens/auth/LoginScreen";
import SignupScreen from "./screens/auth/SignupScreen";
import WalkScreen from "./screens/auth/WalkScreen";
import ForgotPassword from "./screens/auth/ForgotPassword";
import InvoicesScreen from "./screens/invoices/InvoicesScreen";
import ChatScreen from "./screens/chat/ChatScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SheduleScreen from "./screens/shedule/SheduleScreen";
import ChatList from "./screens/chat/ChatList";
import EIcon from "react-native-vector-icons/Ionicons";

const AuthStackNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: SignupScreen
  },
  ForgotPassword: {
    screen: ForgotPassword
  }
});

const SheduleStackNavigator = StackNavigator(
  {
    Shedule: {
      screen: SheduleScreen,
      navigationOptions: {
        headerTitle: "Shedule"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const InvoicesStackNavigator = StackNavigator({
  Invoices: {
    screen: InvoicesScreen,
    navigationOptions: {
      headerTitle: "Invoices"
    }
  }
});
const ChatStackNavigator = StackNavigator({
  ChatList: {
    screen: ChatList,
    navigationOptions: {
      headerTitle: "Chat"
    }
  },
  ChatScreen: {
    screen: ChatScreen,
    navigationOptions: {
      headerTitle: "Chat",
      gesturesEnabled: false,
      tabBarVisible: false
    }
  }
});
const MyProfileStackNavigator = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: "Profile"
    }
  }
});

const MainTabNavigator = TabNavigator(
  {
    Shedule: {
      screen: SheduleStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="access-time"
            size={33}
          />
        )
      }
    },
    Invoices: {
      screen: InvoicesStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="mail"
            size={33}
          />
        )
      }
    },
    Chat: {
      screen: ChatStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EIcon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="ios-chatbubbles"
            size={33}
          />
        )
      }
    },
    MyProfile: {
      screen: MyProfileStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            containerStyle={{ justifyContent: "center", alignItems: "center" }}
            color={tintColor}
            name="person"
            size={33}
          />
        )
      }
    }
  },
  {
    lazy: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.primaryDark,
      inactiveTintColor: colors.grey,
      style: {
        backgroundColor: colors.alabaster
      }
    },
    tabBarComponent: ({ jumpToIndex, ...props }) => (
      <TabBarBottom
        {...props}
        jumpToIndex={index => {
          const { dispatch, state } = props.navigation;

          if (state.index === index && state.routes[index].routes.length > 1) {
            const stackRouteName = ["Shedule", "Invoices", "Chat", "MyProfile"][
              index
            ];

            dispatch(
              NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: stackRouteName })
                ]
              })
            );
          } else {
            jumpToIndex(index);
          }
        }}
      />
    )
  }
);
export const Locumapp = StackNavigator(
  {
    WalkScreen: {
      screen: WalkScreen,
      navigationOptions: {
        header: null
      },
      path: "welcome"
    },
    auth: {
      screen: AuthStackNavigator,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: "screen",
    cardStyle: {
      backgroundColor: "transparent"
    }
  }
);
