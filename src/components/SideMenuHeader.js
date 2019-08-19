import React, { Component } from "react";
import { Text, View, ImageBackground, Dimensions, Image } from "react-native";
import images from "../../assests/Image";
const { height } = Dimensions.get("window");

class SideMenuHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={this.props.BackgroundImage}
          style={this.props.style}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 2 }}>
              <Image
                source={this.props.profile}
                style={this.props.profileStyle}
                resizeMode={"contain"}
              />
            </View>
            <View style={{ flex: 4 }}>
              <Text style={this.props.profileTextStyle}>
                {this.props.profileName}
              </Text>
              <Text style={{ color: "white" }}>{this.props.email}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={this.props.ArrowDown}
                style={this.props.ArrowDownStyle}
                resizeMode={"contain"}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SideMenuHeader;
