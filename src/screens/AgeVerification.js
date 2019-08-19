import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import ImagePicker from "react-native-image-picker";
import { Button } from "../common";
import firebase from "react-native-firebase";

export default class AgeVerification extends Component {
  constructor(props) {
    super(props);
    //set initial state for image and Image path for user Age Validation
    this.state = {
      showImage: false,
      imagePath: "",
      currentUser: null
    };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  //open camera helper method define
  openCamera = () => {
    if (this.state.showImage === false) {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true
        }
      };
      //image that is coptured by open camera method
      ImagePicker.launchCamera(options, response => {
        console.log("response---<", response);
        this.setState({ imagePath: response.uri, showImage: true });
      });
    } else {
      this.props.navigation.navigate("Home");
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: hp("25%"),
            width: "100%",
            backgroundColor: colors.blue
          }}
        >
          {/* header SafeAreaView */}
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
                  //back button for return back to sign up screen
                  onPress={() => this.props.navigation.goBack()}
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
                  marginRight: wp("28%"),
                  bottom: 5
                }}
              >
                <Text
                  style={{ color: colors.white, fontSize: wp(config.h_t_f_s) }}
                >
                  Age Verification
                </Text>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                marginTop: hp("5%")
              }}
            >
              <Text style={{ color: colors.white }}>
                To Purchase alcohol please take
              </Text>
              <Text style={{ color: colors.white }}>
                a selfie of your state ID,shown
              </Text>
              <Text style={{ color: colors.white }}>
                displayed next to their face.
              </Text>
            </View>
          </SafeAreaView>
          {/* header end */}
        </View>
        <View
          style={{
            alignItems: "center",
            marginTop: hp("20%")
          }}
        >
          {/* Button that hold state to show image for Verification */}
          <Button
            style={{
              backgroundColor: colors.blue,
              width: wp("60%"),
              height: hp("8%"),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4
            }}
            //on tap helper method that is define on top within class that will open camera
            onPress={() => this.openCamera()}
            Text={this.state.showImage === false ? "Open Camera" : "Verify"}
            TextStyle={{ color: colors.white, fontSize: 16 }}
          />
        </View>
        {/* image will display after capture */}
        {this.state.showImage === true && (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              style={styles.image}
              source={{ uri: this.state.imagePath }}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: hp("30%"),
    width: wp("30%")
  }
});
