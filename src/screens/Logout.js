import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import images from "../../assests/Image";
import { NavigationActions } from "react-navigation";

export default class Logout extends Component {
  //define custome navigation for log out component
  static navigationOptions = {
    drawerLabel: "Log Out",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.logout}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };
  //receive props constroctor
  constructor(props) {
    super(props);
    // NavigationActions navigate to Login screen after clear stack
    NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
  }

  render() {
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    height: 20,
    width: 20
  }
});
