import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import images from "../../assests/Image";

export default class RateUs extends Component {
  // setting custom header style for header
  static navigationOptions = {
    drawerLabel: "Rate Us",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.rate_us}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
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
    width: 20,
    height: 20
  }
});
