import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
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
import { CardSection, Input, Button } from "../common";
import { SignUpHandler } from "../FirebaseConfig/firebaseHelper";
import firebase from "firebase";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    //initial state defined for showAler password , confirm password, and email
    this.state = {
      showAlert: false,
      userName: "",
      email: "",
      password: "",
      re_password: ""
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* KeyboardAvoidingView use when user want to write then keyboard will open and bottom view will also atomatically adjust */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.containerKeyboard}
          enabled
        >
          <View
            style={{
              height: hp("25%"),
              width: "100%",
              backgroundColor: colors.blue
            }}
          >
            {/* SafeAreaView use this will automatically adjust top content to screen */}
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
                    //on tap this button user will return back to Login screen
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
                    marginRight: wp("38%"),
                    bottom: 5
                  }}
                >
                  <Text
                    style={{
                      color: colors.white,
                      fontSize: wp(config.h_t_f_s)
                    }}
                  >
                    Sign Up
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
                  Please fill your information
                </Text>
                <Text style={{ color: colors.white }}>
                  to complete your account registration
                </Text>
              </View>
            </SafeAreaView>
          </View>
          <View style={styles.container}>
            <View style={styles.fieldsContainer}>
              <CardSection>
                {/* sing user named input field */}
                <Input
                  placeholder="User Name"
                  style={styles.textInput}
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  value={this.state.userName}
                  onChangeText={userName => this.setState({ userName })}
                />
              </CardSection>
              <View style={{ marginTop: 15 }}>
                <CardSection>
                  {/* Email input filed */}
                  <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid="transparent"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </CardSection>
              </View>
              <View style={{ marginTop: 15 }}>
                <CardSection>
                  {/* Password input filed */}
                  <Input
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid="transparent"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                  />
                </CardSection>
              </View>
              <View style={{ marginTop: 15 }}>
                <CardSection>
                  {/* re enter password input field */}
                  <Input
                    placeholder="Re-enter Password"
                    secureTextEntry
                    underlineColorAndroid="transparent"
                    value={this.state.re_password}
                    onChangeText={re_password => this.setState({ re_password })}
                  />
                </CardSection>
              </View>
              {this.state.errorMessage && (
                <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
              )}

              {/* Button that navigate to age verification screen after SignUp */}
              <Button
                style={styles.buttonStyle}
                Text="SIGN UP"
                TextStyle={{ color: colors.white, fontSize: wp("5%") }}
                onPress={this.onSignUp.bind(
                  this,
                  this.state.email,
                  this.state.password,
                  this.state.userName,
                  this.state.re_password,
                  this.props
                )}
              />
              {/* () =>
                  this.props.navigation.navigate("AgeVerification")
                 */}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
  async onSignUp(email, password, userName, re_password, props) {
    if (password === re_password) {
      SignUpHandler(email, password, userName, props);
    } else {
      alert("password did not match, please try again");
    }
  }
}

const styles = StyleSheet.create({
  containerKeyboard: {
    height: hp("100%"),
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: hp("5%")
  },

  fieldsContainer: {
    width: "85%",
    height: wp("65%"),
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  textInput: {
    color: colors.black,
    flex: 1,
    height: 40
  },
  buttonStyle: {
    width: wp("70%"),
    height: hp("7%"),
    backgroundColor: colors.blue,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: wp("7%")
  }
});
