import React from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  RenderView() {
    if (this.props.ImageSource) {
      return (
        <Image source={this.props.ImageSource} style={this.props.ImageStyle} />
      );
    } else {
      return <Text style={this.props.TextStyle}>{this.props.Text} </Text>;
    }
  }
  render() {
    const { ImageStyle, TextStyle } = styles;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
        {this.RenderView()}
      </TouchableOpacity>
    );
  }
}
const styles = {
  ImageStyle: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 2
  },
  TextStyle: { color: colors.white, fontSize: wp("5%") }
};
export { Button };
