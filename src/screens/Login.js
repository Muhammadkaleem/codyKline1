import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  Modal
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import { Input, Button } from "../common";
import { LoginHandler } from "../FirebaseConfig/firebaseHelper";
import { faceBookAuth } from "../FacebookConfig/Facebook";
import { GoogleSignin } from "react-native-google-signin";
import firebase from "react-native-firebase";

export default class Login extends Component {
  //receive props
  constructor(props) {
    super(props);
    //define initial states for Password
    this.state = {
      showPass: true,
      email: "",
      password: "",
      errorMessage: null,
      rejectionPopUp: false
    };
  }
  onPressLogin = (email, password, props) => {
    if (email && password === "") {
      alert("please enter Valid email and password");
    } else {
      LoginHandler(email, password, props);
    }
  };
  ///===========google signin==========///
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        "682039270609-da976omnd8eo1tjnt97uldaoibg52a2q.apps.googleusercontent.com",
      forceConsentPrompt: true // if you want to show the authorization prompt at each login
    });
  }
  googleSignInHandler = () => {
    GoogleSignin.hasPlayServices()
      .then(res => {
        GoogleSignin.signIn()
          .then(res => {
            console.log(res);
            const credential = firebase.auth.GoogleAuthProvider.credential(
              res.idToken
            );
            console.log("credential", credential);
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(response => {
                console.log("response ====>", response);
                this.props.navigation.navigate("Home");
              })
              .catch(error => {
                console.log("error==>", error);
              });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });

    // GoogleSignin.hasPlayServices()
    //   .then(res => {
    //     GoogleSignin.signIn()
    //       .then(res => {
    //         console.log(res);
    //         console.log("token===>", res.idToken);
    //         const credential = firebase.auth.GoogleAuthProvider.credential(
    //           res.idToken
    //         );
    //         console.log("credential ====>", credential);
    //         // firebase
    //         //   .auth()

    //         //   .signInWithCredential(credential)
    //         //   .then(response => {
    //         //     console.log("response ====>", response);
    //         //     this.props.navigation.navigate("Home");
    //         //   })
    //         //   .catch(error => {
    //         //     console.log("error==>", error);
    //         //   });

    //         // const credential = firebase.auth.GoogleAuthProvider.credential(res.idToken)
    //         // // login with credential
    //         //         const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
    //         //       console.log("firebaseUserCredential ====>", firebaseUserCredential);
    //         //         console.log("credential ====>", credential);

    //         // this.props.navigation.navigate("Home");
    //       })
    //       .catch(err => {
    //         console.log(error.code);
    //       });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  ///=============---------------==========///
  onFbAuth() {
    faceBookAuth();
  }
  render() {
    return (
      <View style={styles.backgroundImage}>
        {/* KeyboardAvoidingView use when user want to write then keyboard will open and bottom view will also atomatically adjust */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.container}
        >
          <View style={styles.imageContainer}>
            <Image
              style={{ width: wp("30%") }}
              source={images.splash_image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.fieldsContainer}>
            <View style={styles.InputAreaStyle}>
              {/* Login user name input field */}
              <Input
                placeholder="User Name"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                value={this.props.email}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View style={{ marginTop: hp("2%") }}>
              <View style={styles.subInputAreaStyle}>
                {/* Login Password inPut field */}
                <Input
                  placeholder="Password"
                  secureTextEntry
                  underlineColorAndroid="transparent"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </View>
            </View>
            {/* Login reuseable button all props define here also define onPress props to navigate Home screen after authentiaction */}

            <Button
              // onPress={this.onLoginHandle}
              onPress={this.onPressLogin.bind(
                this,
                this.state.email,
                this.state.password,
                this.props
              )}
              Text="LOGIN"
              style={styles.ButtonStyle}
              TextStyle={{ color: colors.white, fontSize: wp("5%") }}
            />
          </View>

          {this.state.errorMessage && (
            <Modal
              //confirmation Pop up message when user not eligible
              onRequestClose={() => this.setState({ rejectionPopUp: false })}
              animationType="fade"
              transparent={true}
              visible={this.state.rejectionPopUp}
            >
              <View style={styles.modelRootStyle}>
                <View style={styles.modelBoxStyle}>
                  <View style={styles.modelInnerBox}>
                    <Text style={{ marginLeft: 5, marginRight: 5 }}>
                      {this.state.errorMessage}
                    </Text>
                    <Button
                      style={styles.modelConfirmButton}
                      onPress={() =>
                        this.setState({
                          rejectionPopUp: false
                        })
                      }
                      Text="Ok"
                      TextStyle={{ color: colors.white }}
                    />
                  </View>
                </View>
              </View>
            </Modal>
          )}
          {/* <Text style={{ color: "red" }}>{this.state.errorMessage}</Text> */}
          <View style={styles.containerOne}>
            {/* facebook social button that navigate to Home screen after successfull login with facebook */}
            <Button
              style={{
                backgroundColor: "red",
                height: 50,
                width: "100%",
                borderRadius: 2,
                marginTop: 0,
                marginBottom: 5
              }}
              onPress={this.onFbAuth}
              ImageSource={images.fb}
              ImageStyle={{ flex: 1, width: "100%" }}
            />
            {/* Google social button that navigate to Home screen after successfull
            login with Google */}
            <Button
              style={{
                backgroundColor: "red",
                height: 50,
                width: "100%",
                borderRadius: 2,
                marginTop: 0
              }}
              onPress={this.googleSignInHandler}
              ImageSource={images.g_plus}
              ImageStyle={{ flex: 1, width: "100%" }}
            />
          </View>
          <View style={{ marginBottom: "40%" }}>
            {/* Button that navigate to SignUp screen in case you have not account */}
            <Button
              onPress={() => this.props.navigation.navigate("SignUp")}
              Text="Dont have an account?"
              style={styles.ButtonStyle}
              TextStyle={{ color: colors.white, fontSize: wp("5%") }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.blue
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    justifyContent: "center",
    height: hp("35%")
  },
  fieldsContainer: {
    width: "85%",
    height: wp("60%"),
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.white
  },

  containerOne: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: wp("2%"),
    paddingLeft: wp("2%"),
    marginTop: hp("3%")
  },
  InputAreaStyle: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    marginTop: hp("5%"),
    paddingRight: hp("5%")
  },
  subInputAreaStyle: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: hp("2%")
  },
  ButtonStyle: {
    width: wp("70%"),
    height: hp("7%"),
    backgroundColor: colors.blue,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: wp("1%")
  },
  modelRootStyle: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    alignItems: "center",
    justifyContent: "center"
  },
  modelBoxStyle: {
    width: wp("85%"),
    height: wp("45%"),
    backgroundColor: "white",
    borderRadius: 5
  },
  modelInnerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  modelConfirmButton: {
    height: wp("12%"),
    width: wp("38%"),
    marginTop: wp("4%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: colors.blue
  }
});
