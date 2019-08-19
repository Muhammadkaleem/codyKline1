import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
class TrackCard extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Image
          source={this.props.ImageSource}
          resizeMode={this.props.resizeMode}
          style={this.props.ImageStyle}
        />
        <View
          style={{
            flexDirection: "column",
            marginLeft: wp("6%"),
            alignSelf: "center",
            marginBottom: hp("5%")
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {this.props.title}
          </Text>
          <Text style={{ fontSize: 12, top: 8 }}>{this.props.OrderNumber}</Text>
        </View>
      </View>
    );
  }
}

export default TrackCard;
