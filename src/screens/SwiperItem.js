import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import Swiper from "react-native-swiper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Button } from "../common";

class SwiperItem extends Component {
  render() {
    return (
      <View style={styles.backgroundImage2}>
        <View
          //inLine styling
          style={{
            flex: 0,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <View
          style={{
            flex: 4,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: hp("10%")
          }}
        >
          <Image
            source={this.props.ImageSource}
            resizeMode="contain"
            style={this.props.ImageStyle}
          />
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: colors.black,
              fontSize: wp("7%"),
              marginBottom: 10,
              alignSelf: "center"
            }}
          >
            Onboarding Message
          </Text>
        </View>
      </View>
    );
  }
}

export default SwiperItem;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("70%"),
    height: hp("7%"),
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: colors.blue,
    marginBottom: 10
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage2: {
    flex: 1
  },
  dotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.white,
    borderWidth: 1
  },
  activeDotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.gray
  }
});
