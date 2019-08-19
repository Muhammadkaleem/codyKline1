import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class SettingButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.listItems}>
        <Text
          style={{
            color: colors.black,
            fontSize: wp("4%"),
            fontWeight: "bold",
            marginLeft: wp("3%")
          }}
        >
          {this.props.Text}
        </Text>
        <Image
          source={this.props.ImageSource}
          style={{ width: 10, height: 20, marginRight: wp("3%") }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    );
  }
}

export default SettingButton;

const styles = {
  listItems: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 0.5,
    borderTopColor: "black",
    borderBottomColor: "white",
    height: 40
  }
};
