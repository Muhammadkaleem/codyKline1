import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Modal } from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Button } from "../common";

export default class AgeValidation extends Component {
  constructor(props) {
    super(props);
    //set initial state for rejectionPopUp
    this.state = {
      rejectionPopUp: false
    };
  }

  acceptAgeLimit = () => {
    //if user eligible then  Navigate to Camera verification Screen
    this.props.navigation.navigate("Login");
  };

  rejectAgeLimit = () => {
    //if user not eligible then state will be show rejectionPopUp
    this.setState({ rejectionPopUp: true });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topImage}>
          <Image
            source={images.splash_image}
            style={styles.image}
            resizeMode={"contain"}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={{ textAlign: "center" }}>Are you 21 y.o or older?</Text>
          <View style={styles.button}>
            <Button
              Text="Yes"
              TextStyle={{ color: colors.white }}
              style={styles.acceptStyle}
              onPress={() => this.acceptAgeLimit()}
            />

            {/* if user is under age then action will be rejectAgeLimit return back */}
            <Button
              onPress={() => this.rejectAgeLimit()}
              style={styles.rejectStyle}
              TextStyle={{ color: colors.white }}
              Text="No"
            />
          </View>
        </View>

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
                <Text>All users of app must be 21 years</Text>
                <Text>age or older</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topImage: {
    height: hp("50%"),
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: wp("55%"),
    width: wp("55%"),
    marginTop: hp("5%")
  },
  bottomContainer: {
    backgroundColor: "#f7f8f9",
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    height: wp("47%"),
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flexDirection: "row",
    marginTop: wp("7%")
  },
  acceptStyle: {
    backgroundColor: colors.blue,
    width: wp("26%"),
    height: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
  },
  rejectStyle: {
    backgroundColor: colors.blue,
    width: wp("24%"),
    height: wp("10%"),
    marginLeft: wp("5%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3
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
