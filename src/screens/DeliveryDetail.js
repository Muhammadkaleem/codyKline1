import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
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
import { Button } from "../common";

export default class DeliveryDetail extends Component {
  constructor(props) {
    super(props);
    //define initial state for date, Month etc.
    this.state = {
      date: 0,
      month: "",
      months: [
        "january",
        "february",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "November",
        "December"
      ]
    };
  }

  componentDidMount() {
    //Map function define for setting date for order this will take array elements
    let currentDate = new Date().getDate();
    // get date function
    let currentMonth = new Date().getMonth();
    //get current Month function
    this.setState({ date: currentDate });
    this.state.months.map((item, index) => {
      //condition if month in index is same as the existing month then month will be display on screen
      if (index === currentMonth) {
        this.setState({ month: item });
      }
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          <SafeAreaView
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: Platform.OS === "ios" ? 20 : 0
            }}
          >
            <View style={{ flex: 1, marginLeft: wp("2%") }}>
              {/* function define for go back to Detail Screen  */}
              {/* 
              <Image
                style={{
                  width: wp(config.h_b_b_w),
                  height: hp(config.h_b_b_h)
                }}
                source={images.back}
                resizeMode="contain"
                onPress={() => this.props.navigation.goBack()}
              /> */}
              <Button
                ImageSource={images.back}
                ImageStyle={{
                  width: wp(config.h_b_b_h_b),
                  height: hp(config.h_b_b_h)
                }}
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <View style={{ flex: 4, alignItems: "center" }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: wp(config.h_t_f_s),
                  marginRight: wp("18%")
                }}
              >
                Delivery Details
              </Text>
            </View>
          </SafeAreaView>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ padding: wp("6%") }}>
            <Text>Deliver to</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: hp("5%")
              }}
            >
              <View style={{ width: wp("14%") }}>
                <Image
                  style={{
                    width: wp("4.5%"),
                    height: hp(config.h_b_b_h),
                    tintColor: colors.blue,
                    marginTop: hp("1%")
                  }}
                  source={images.check_mark}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flexDirection: "column", width: wp("60%") }}>
                <Text>Previous delivery location</Text>
                <Text style={{ fontWeight: "bold" }}>
                  Bulevardul Dimitrie Cantemir...
                </Text>
              </View>
              {/* Button to change Text */}
              <Button
                style={{ marginTop: hp("1.5%") }}
                Text="Change"
                TextStyle={{ color: colors.blue }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: hp("5%")
              }}
            >
              <View style={{ width: wp("14%") }}>
                <Image
                  style={{
                    width: wp("4.5%"),
                    height: hp(config.h_b_b_h),
                    tintColor: colors.white,
                    marginTop: hp("2%")
                  }}
                  source={images.check_mark}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flexDirection: "column", width: wp("60%") }}>
                <Text>Work Address</Text>
                <Text style={{ fontWeight: "bold" }}>No address added</Text>
              </View>
              {/* Button to change Text */}
              <Button
                style={{ marginTop: hp("1.5%") }}
                Text="Change"
                TextStyle={{ color: colors.blue }}
              />
            </View>
            <View style={{ marginTop: hp("7%") }}>
              <Text>Program Start Date</Text>
              <View style={styles.dateInput}>
                {/* Text that receive date time as state */}
                <Text
                  style={{
                    padding: wp("2.2%"),
                    fontWeight: "bold",
                    fontSize: 18
                  }}
                >
                  {this.state.month} {this.state.date}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.deliveryNote}>
            {/* text to delivery note */}
            <Text>
              PLEASE NOTE: Deliveries are done the day before your start date,
              from 7 pm - 2 a.m.
            </Text>
          </View>

          <Button
            //on press this button user will move to Payment screen
            style={styles.continueBtn}
            onPress={() => this.props.navigation.navigate("Payment")}
            Text="CONTINUE"
            TextStyle={{ color: "white" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: hp("10%"),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blue
  },
  dateInput: {
    borderWidth: 1,
    width: wp("55%"),
    height: hp("7%"),
    borderColor: colors.gray,
    borderRadius: 3,
    marginTop: hp("5%"),
    marginLeft: wp("3.7%")
  },
  deliveryNote: {
    marginTop: hp("4%"),
    marginLeft: wp("10%")
  },
  continueBtn: {
    backgroundColor: colors.blue,
    width: wp("83%"),
    marginTop: hp("4%"),
    alignSelf: "center",
    marginLeft: wp("3%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center"
  }
});
