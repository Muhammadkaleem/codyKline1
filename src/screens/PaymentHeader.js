import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ImageBackground
} from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
class PaymentHeader extends Component {
  render() {
    return (
      <ImageBackground
        source={images.stripe_bg}
        style={{
          height: hp("27%"),
          width: "100%",
          backgroundColor: colors.blue
        }}
      >
        <SafeAreaView
          style={{
            flexDirection: "column",
            marginTop: Platform.OS === "ios" ? 20 : hp("2%")
          }}
        >
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View style={{ flex: 1, marginLeft: wp("2%") }}>
              <TouchableOpacity
                //function to go back screen
                onPress={this.props.onPress}
              >
                <Image
                  style={{
                    width: wp(config.h_b_b_w),
                    height: hp(config.h_b_b_h)
                  }}
                  source={images.back}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                marginRight: wp("38%"),
                bottom: 5
              }}
            >
              <Text
                style={{ color: colors.white, fontSize: wp(config.h_t_f_s) }}
              >
                {this.props.Text}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: hp("8%")
            }}
          >
            <Image
              style={{ width: wp("80%"), height: hp("8%") }}
              source={images.stripe}
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default PaymentHeader;
