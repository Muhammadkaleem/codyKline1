import { Dimensions, View, ScrollView, Platform, Linking } from "react-native";

import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems
} from "react-navigation";
import { fadeIn, fromRight } from "./src/screens/CustomTransition";
import React, { Component } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import Splash from "./src/screens/Splash";
import OnBoarding from "./src/screens/Onboarding";
import AgeValidation from "./src/screens/AgeValidation";
import AgeVerification from "./src/screens/AgeVerification";
import Login from "./src/screens/Login";
import SignUp from "./src/screens/SignUp";
import MyCart from "./src/screens/MyCart";
import TrackMyOrder from "./src/screens/TrackMyOrder";
import DetailScreen from "./src/screens/DetailScreen";
import Logout from "./src/screens/Logout";
import RateUs from "./src/screens/RateUs";
import OrderHistory from "./src/screens/OrderHistory";
import Setting from "./src/screens/Setting";
import DeliveryDetail from "./src/screens/DeliveryDetail";
import Payment from "./src/screens/Payment";
import DeliveryStatus from "./src/screens/DeliveryStatus";
import images from "./assests/Image";
import Colors from "./assests/Colors";
import AppConstants from "./src/constants/AppConstants";
import { Provider } from "react-redux";
import configureStore from "./src/screens/store/configureStore";
import SideMenuHeader from "./src/components/SideMenuHeader";

// Declaring constants
const { height } = Dimensions.get("window");
console.disableYellowBox = true;
// Declaring Class
const store = configureStore();
class App extends Component {
  render() {
    //App container is basically React navigation object that we are render in app component
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

//navigation Root define condition for every screen
class SideMenuNavigation extends Component {
  //receive props
  constructor(props) {
    super(props);
  }
  navigateTo(screenName) {
    this.props.navigation.closeDrawer();
    if (screenName === "Logout") {
      this.props.navigation.navigate("Login");
    } else if (screenName === "Account") {
      this.props.navigation.navigate("Account");
    } else if (screenName === "TrackMyOrder") {
      this.props.navigation.navigate("TrackMyOrder");
    } else if (screenName === "MyCart") {
      this.props.navigation.navigate("MyCart");
    } else if (screenName === "RateUs") {
      this.rateUs();
    } else {
      this.props.navigation.navigate(screenName);
    }
  }

  // Goto Play/App Store to rate the application
  rateUs() {
    if (Platform.OS === "android") {
      Linking.openURL(AppConstants.playStoreURL);
    } else {
      Linking.openURL(AppConstants.appStoreURL);
    }
  }

  render() {
    const headerHeight = height / 5;
    let props = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SideMenuHeader
          style={{
            height: headerHeight,
            alignItems: "center",
            justifyContent: "center",
            padding: 10
          }}
          BackgroundImage={images.bg_image}
          profile={images.avatar}
          profileStyle={{ width: 60 }}
          profileName="Jonathan Doe"
          profileTextStyle={{ fontSize: 17, color: "white" }}
          email="jonathanDoe@me.com"
          ArrowDown={images.arrow_drop_down}
          ArrowDownStyle={{ width: 20, height: 20 }}
        />
        <ScrollView style={{ height: height - height / 5 }}>
          <DrawerItems
            //drawer screens pass as props
            {...props}
            onItemPress={result => this.navigateTo(result.route.routeName)}
          />
        </ScrollView>
      </View>
    );
  }
}

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (
    prevScene &&
    prevScene.route.routeName === "Login" &&
    nextScene.route.routeName === "HomeScreen"
  ) {
    //fadeIn function that is define in Custome transition  component
    return fadeIn();
  } else {
    //fromRight function that is define in Custome transition  component
    return fromRight();
  }
};

export const DrawerNavigation = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Account: {
      screen: Setting
    },
    MyCart: {
      screen: MyCart
    },
    TrackMyOrder: {
      screen: TrackMyOrder
    },
    OrderHistory: {
      screen: OrderHistory
    },
    RateUs: {
      screen: RateUs
    },
    Logout: {
      screen: Logout
    }
  },
  {
    contentComponent: SideMenuNavigation,
    drawerWidth: Dimensions.get("window").width - 65,
    drawerPosition: "left",
    lazy: true,
    useNativeAnimations: true,
    backBehavior: "history",
    contentOptions: {
      activeTintColor: Colors.blue
    }
  }
);

const RootStackNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    OnBoarding: {
      screen: OnBoarding
    },
    AgeValidation: {
      screen: AgeValidation
    },
    AgeVerification: {
      screen: AgeVerification
    },
    DetailScreen: {
      screen: DetailScreen
    },
    DeliveryDetail: {
      screen: DeliveryDetail
    },
    Payment: {
      screen: Payment
    },
    DeliveryStatus: {
      screen: DeliveryStatus
    },
    HomeStack: {
      screen: DrawerNavigation
    }
  },
  {
    defaultNavigationOptions: {},
    initialRouteName: "Splash",
    headerMode: "null",
    transitionConfig: nav => handleCustomTransition(nav)
  }
);

const AppContainer = createAppContainer(RootStackNavigator);
