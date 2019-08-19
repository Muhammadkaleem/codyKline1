import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Platform
} from "react-native";
import { NavigationActions, StackActions } from "react-navigation";
import images from "./../../assests/Image";

export default class SplashScreen extends Component {
  //Receiving porps
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //Navigation Action After Splash screen timeout if platform is OS
    if (Platform.OS === "ios") {
      // setTimeout(() => {
      const navigateAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "OnBoarding" })]
      });
      this.props.navigation.dispatch(navigateAction);
      // }, 2000)
    } else {
      const navigateAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "OnBoarding" })]
      });
      this.props.navigation.dispatch(navigateAction);
    }
  }

  render() {
    return (
      <View style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={images.splash_image} resizeMode="contain" />
          </View>
          {/*<View style={styles.textContainer}>*/}
          {/*    <Text style={styles.textStyle}>KARAOKE </Text>*/}
          {/*    <Text style={styles.textStyle}>VAN </Text>*/}
          {/*</View>*/}
        </View>
      </View>
    );
  }
}
//styling of Views text and images

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: "white",
    fontSize: 35,
    fontFamily: "americorps",
    textShadowColor: "blue",
    textShadowOffset: { width: 3, height: 0 },
    textShadowRadius: 0
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  textContainer: {
    flex: 1,
    alignItems: "center"
  }
});
