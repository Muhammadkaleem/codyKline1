import React, { Component } from "react";
import { Text, View } from "react-native";

class CardSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { CardSectionStyle } = styles;
    return <View style={CardSectionStyle}>{this.props.children}</View>;
  }
}

export { CardSection };

const styles = {
  CardSectionStyle: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 10
  }
};
