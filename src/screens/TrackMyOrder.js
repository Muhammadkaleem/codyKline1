import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import Header from "../components/Header";
import TrackCard from "./TrackCard";
import { Button } from "../common";
export default class TrackMyOrder extends Component {
  //custom Navigation option
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: "Track My Order",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.car}
        style={[{ width: 20, height: 20 }, { tintColor: tintColor }]}
        resizeMode={"contain"}
      />
    )
  });

  constructor(props) {
    super(props);
  }

  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        {/* Track Order header that is place in seperate component */}
        <Header nav={nav} name={"Track Order"} />
        {/* Product detail Card and that contain order number and order title */}
        {/* trackCard is reusebale component all props define here */}
        <TrackCard
          style={{
            borderWidth: 1,
            borderColor: colors.light_gray,
            height: hp("20%"),
            flexDirection: "row",
            borderRadius: 4,
            marginTop: hp("1%")
          }}
          ImageSource={images.break_heart}
          resizeMode="contain"
          ImageStyle={{
            height: hp("15%"),
            width: wp("25%"),
            marginTop: hp("1%")
          }}
          title="Red Wine"
          OrderNumber=" Order Number: 172340UDICSOD192"
        />

        <View style={styles.container}>
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <View
              style={{
                width: wp("15%"),
                alignItems: "center",
                flexDirection: "column"
              }}
            />
            <View
              style={{
                width: "100%",
                padding: hp("3%")
              }}
            >
              {/* address area and and date design */}
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Day 1</Text>
              </View>
              <View style={{ marginTop: hp("2%") }}>
                <Text style={{}}>Driver Delivery Confirmed</Text>
                <Text style={{}}>11:00am 11/13/18</Text>
              </View>
              <View style={{ marginTop: hp("2%") }}>
                <Text style={{}}>Customer Delivery Confirmed</Text>
                <Text style={{}}>11:00am 11/13/18</Text>
              </View>
              <View style={{ marginTop: hp("3%") }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Day 2</Text>
              </View>
              <View style={{ marginTop: hp("2%") }}>
                <Text style={{}}>En Route</Text>
                <Text style={{}}>ETA 11:00 - 11:30 a.m. 11/13/18</Text>
              </View>
              {/* Button to confirm order */}
              <Button
                style={{
                  backgroundColor: colors.blue,
                  height: hp("4%"),
                  width: wp("25%"),
                  marginTop: hp("2%"),
                  borderRadius: 7,
                  alignItems: "center",
                  justifyContent: "center"
                }}
                Text="Confirm"
                TextStyle={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp("2%")
  }
});
