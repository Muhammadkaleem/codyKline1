import React, { Component } from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import images from "../../assests/Image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Header from "../components/Header";
import OrderHistoryCard from "./OrderHistoryCard";

const { width, height } = Dimensions.get("window");

export default class DetailScreen extends Component {
  //custom order history header
  static navigationOptions = {
    drawerLabel: "Order History",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.check_mark}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
  }

  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        {/* Header for order history components */}
        <Header nav={nav} name={"Order History"} />
        <ScrollView
          contentInset={{ top: 0, left: 0, bottom: 10, right: 0 }}
          style={styles.mainContainer}
        >
          {/* OrderHistoryCard basically hold order history date item detail Quantity and price etc */}
          <OrderHistoryCard
            date="11/02/19"
            Item=" Item"
            Description="Description"
            Quantity="2"
            Price="$14"
            Charges="Delivery Charges"
          />
          {/* card 2 */}
          <OrderHistoryCard
            date="11/02/19"
            Item=" Item"
            Description="Description"
            Quantity="2"
            Price="$14"
            Charges="Delivery Charges"
          />
          {/* card 3 */}
          <OrderHistoryCard
            date="11/02/19"
            Item=" Item"
            Description="Description"
            Quantity="2"
            Price="$14"
            Charges="Delivery Charges"
          />
          {/* card 4 */}
          <OrderHistoryCard
            date="11/02/19"
            Item=" Item"
            Description="Description"
            Quantity="2"
            Price="$18"
            Charges="Delivery Charges"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: wp("3%"),
    paddingRight: wp("3%")
  },
  order2: {
    flex: 1,
    marginTop: hp("2%"),
    marginBottom: hp("2%")
  },
  orderStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: wp("2%")
  },
  orderCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp("16%")
  },
  orderCenterOne: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  orderCenterTwo: {
    flex: 2,
    height: "100%",
    flexDirection: "column",
    padding: 10
  },
  orderCenterTwoCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  deliveryCharges: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp("5%"),
    marginTop: hp("1.1%")
  },
  icon: {
    width: 20,
    height: 20
  }
});
