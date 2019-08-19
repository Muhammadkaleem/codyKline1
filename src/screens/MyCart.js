import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Card, CardSection, Button } from "../common";
import Header from "../components/Header";
import MyCartView from "./MyCartView";

export default class MyCart extends Component {
  static navigationOptions = ({ navigation }) => ({
    //CUSTOM  style for My cart header
    drawerLabel: "My Cart",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.cart}
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
        {/* header that is seperate component place and also define its properties */}
        <Header
          nav={nav}
          name={"My Cart"}
          rightIcon={true}
          headerRightIconName={"md-cart"}
        />
        {/* ScrollView for rendring View on screen */}
        <ScrollView
          contentInset={{ top: 0, left: 0, bottom: 15, right: 0 }}
          style={styles.mainContainer}
        >
          {/* My Cart Items view */}
          <MyCartView
            ViewStyle={styles.orderCenter}
            ImageSource={images.heart}
            ImageStyle={{
              width: wp("6.5%"),
              marginLeft: wp("3%"),
              alignItems: "center"
            }}
            Title="Item"
            Description="Description"
            Quantity="4"
            Price="$12"
          />
          <View style={styles.order2}>
            <View
              style={{
                width: "100%",
                borderWidth: 0.5,
                borderColor: "#ccc7c7",
                marginTop: 10
              }}
            />
            {/* itemView 2 */}
            <MyCartView
              ViewStyle={styles.orderCenter}
              ImageSource={images.heart}
              ImageStyle={{
                width: wp("6.5%"),
                marginLeft: wp("3%"),
                alignItems: "center"
              }}
              Title="Item"
              Description="Description"
              Quantity="4"
              Price="$12"
            />
            <View
              style={{
                width: "100%",
                borderWidth: 0.5,
                borderColor: "#ccc7c7",
                marginTop: 10
              }}
            />
            {/* item view 3 */}
            <MyCartView
              ViewStyle={styles.orderCenter}
              ImageSource={images.heart}
              ImageStyle={{
                width: wp("6.5%"),
                marginLeft: wp("3%"),
                alignItems: "center"
              }}
              Title="Item"
              Description="Description"
              Quantity="4"
              Price="$12"
            />
            <View
              style={{
                width: "100%",
                borderWidth: 0.5,
                borderColor: "#ccc7c7",
                marginTop: 10
              }}
            />
            {/* Item View 4 */}
            <MyCartView
              ViewStyle={styles.orderCenter}
              ImageSource={images.heart}
              ImageStyle={{
                width: wp("6.5%"),
                marginLeft: wp("3%"),
                alignItems: "center"
              }}
              Title="Item"
              Description="Description"
              Quantity="4"
              Price="$12"
            />
            {/* container View that contain content  */}
            <View
              style={{
                width: "100%",
                borderWidth: 0.5,
                borderColor: "#ccc7c7",
                marginTop: 10
              }}
            />
            {/* View for delivery Charges */}
            <View style={styles.deliveryCharges}>
              <Text
                style={{
                  fontSize: wp("3%"),
                  fontWeight: "bold",
                  color: colors.gray
                }}
              >
                Delivery Charges
              </Text>
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontWeight: "bold",
                  color: colors.gray
                }}
              >
                $5.50
              </Text>
            </View>
            {/* ///////////////// */}
            {/* total amount View */}
            <View
              style={{
                width: "100%",
                borderWidth: 0.5,
                borderColor: colors.light_gray,
                marginTop: 10
              }}
            />

            <View style={styles.deliveryCharges}>
              <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>
                Total
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: wp("6%"),
                  color: colors.blue
                }}
              >
                $5.50
              </Text>
            </View>
          </View>
          {/* ////////////////// */}
        </ScrollView>

        <View
          style={{
            flex: 0.6,
            alignItems: "center",
            top: hp("6%")
          }}
        >
          {/* Button to navigate DeliveryDetail screeb */}
          <Button
            style={{
              backgroundColor: colors.blue,
              width: wp("65%"),
              height: hp("7%"),
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3
            }}
            onPress={() => this.props.navigation.navigate("DeliveryDetail")}
            Text="PLACE THE ORDER"
            TextStyle={{ color: "white" }}
          />
          {/* Shopping process view */}
          <View
            style={{
              marginTop: hp("2%")
            }}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Continue Shopping
            </Text>
          </View>
          <View
            style={{
              marginTop: hp("2%"),
              padding: wp("2%")
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 11,
                textDecorationLine: "underline"
              }}
            >
              Nulla lecinia a eros auctor pretium.Nullam pharetra massa augue,
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 11,
                textDecorationLine: "underline"
              }}
            >
              in rhoncus dui posuere moestie.Maecenas vitae mi a augue
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: 11,
                textDecorationLine: "underline"
              }}
            >
              elementum sagittis sed vitae magna
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
//style for MyCard component Views Images
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
  }
});
