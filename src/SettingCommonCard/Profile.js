import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";

const { height } = Dimensions.get("window");
class Profile extends Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Image
              source={this.props.image}
              style={{ width: 100, height: 100, borderRadius: 50 }}
              resizeMode={"contain"}
            />
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: "column",
              paddingTop: hp("2%"),
              paddingBottom: hp("2%")
            }}
          >
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={this.props.titleStyle}>{this.props.title}</Text>
              <Image
                source={this.props.icon1}
                style={this.props.icon1Style}
                resizeMode={"contain"}
              />
            </View>
            <View style={{ flex: 2, flexDirection: "column" }}>
              <Text style={this.props.phoneTextStyle}>{this.props.phone}</Text>
              <Text style={this.props.emailStyle}>{this.props.email}</Text>
            </View>
          </View>
        </View>

        {/*Seprator*/}
        <View
          style={{
            marginTop: hp("1%"),
            width: "100%",
            borderWidth: 0.5,
            borderColor: "#B1B1B1"
          }}
        />

        {/*Delivery Address Header*/}
        <View
          style={{
            width: "100%",
            marginTop: hp("2%"),
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text style={{ color: colors.gray, fontSize: wp("5%") }}>
            {this.props.lableText}
          </Text>
          <Image
            source={this.props.Icon}
            style={{ width: wp("5%"), height: hp("5%") }}
            resizeMode={"contain"}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10
  },
  shadowBox: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    height: height / 7,
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    paddingTop: 20
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    width: 250,
    height: 38,
    borderRadius: 5,
    marginTop: 10
  },
  listItems: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 0.5,
    borderTopColor: "black",
    borderBottomColor: "white",
    height: 40
  }
});
