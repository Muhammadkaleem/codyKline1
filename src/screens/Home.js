import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform
} from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import firebase from "firebase";

export default class HomeScreen extends Component {
  // static navigationOptions = ({navigation}) => ({
  //     headerTitle: 'Pick Up',
  //     headerTitleStyle: {
  //         color: colors.white
  //     },
  //     headerBackground: (
  //         <Image
  //             style={{width: '100%', flex: 1}}
  //             source={images.bg_image}
  //         />
  //     ),
  //
  //     headerLeft: (
  //         <TouchableOpacity style={{marginLeft: 20}} onPress={() => navigation.openDrawer()}>
  //             <Image
  //                 style={{width: 24, height: 24}}
  //                 source={images.menu}
  //                 resizeMode={'contain'}
  //             />
  //         </TouchableOpacity>
  //     )
  // });

  constructor(props) {
    super(props);
    console.log("props--<", this.props);
  }

  componentDidMount() {}

  openDrawer = () => {
    console.log(this.props);
    console.log("openDrawer");
    // this.props.navigation.openDrawer();
  };

  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={images.bg_image}
          style={{
            height: hp("10%"),
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <SafeAreaView
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: Platform.OS === "ios" ? 20 : 0
            }}
          >
            <View style={{ flex: 1, marginLeft: wp("2%") }}>
              <TouchableOpacity onPress={() => nav.openDrawer()}>
                <Image
                  style={{
                    width: wp(config.h_m_b_w),
                    height: hp(config.h_m_b_h)
                  }}
                  source={images.menu}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 2, alignItems: "center" }}>
              <Text
                style={{ color: colors.white, fontSize: wp(config.h_t_f_s) }}
              >
                Home
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginRight: wp("6%"),
                justifyContent: "space-between",
                flexDirection: "row"
              }}
            >
              <View />
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
}
