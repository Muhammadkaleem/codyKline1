import React, { Component } from "react";
import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
const SocialButton = ({ resizeMode, source }) => {
  const { ImageStyle } = styles;
  return <Image source={source} style={ImageStyle} resizeMode={resizeMode} />;
};

export { SocialButton };

const styles = {
  ImageStyle: {
    height: wp("15%"),
    marginBottom: hp("1%"),
    width: "100%",
    borderRadius: 5
  }
};
