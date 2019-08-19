import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Button } from "../common";

const { width, height } = Dimensions.get("window");

export class OrderHistoryCard extends Component {
  render() {
    return (
      <View style={styles.order2}>
        <View style={styles.orderStart}>
          <Text style={{ fontSize: wp("4%"), fontWeight: "bold" }}>
            {this.props.date}
          </Text>

          <Button
            style={{
              backgroundColor: colors.blue,
              padding: 5,
              borderRadius: 5,
              width: wp("30%")
            }}
            Text="Export Receipt"
            TextStyle={{
              color: colors.white,
              fontSize: wp("3.5%"),
              alignSelf: "center"
            }}
          />
        </View>

        <View style={styles.orderCenter}>
          <Image
            source={images.heart}
            style={{
              width: wp("6.5%"),
              marginLeft: wp("3%"),
              alignItems: "center"
            }}
            resizeMode={"contain"}
          />

          <View style={styles.orderCenterTwo}>
            <Text
              style={{
                fontSize: wp("5%"),
                fontWeight: "bold",
                marginTop: hp("1%")
              }}
            >
              {this.props.Item}
            </Text>
            <Text style={{ fontSize: wp("3%"), color: colors.light_gray }}>
              {this.props.Description}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: colors.light_gray,
                  fontSize: wp("3%"),
                  fontWeight: "bold",
                  marginTop: hp("3%")
                }}
              >
                Quantity :
              </Text>
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontWeight: "bold",
                  marginTop: hp("3%")
                }}
              >
                {this.props.Quantity}
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "flex-start", marginRight: 10 }}>
            <Text
              style={{
                fontSize: wp("6%"),
                color: colors.blue,
                fontWeight: "bold"
              }}
            >
              {this.props.Price}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 0.5,
            borderColor: "#ccc7c7",
            marginTop: 10
          }}
        />

        <View style={styles.orderCenter}>
          <Image
            source={images.heart}
            style={{
              width: wp("6.5%"),
              marginLeft: wp("3%"),
              alignItems: "center"
            }}
            resizeMode={"contain"}
          />

          <View style={styles.orderCenterTwo}>
            <Text
              style={{
                fontSize: wp("5%"),
                fontWeight: "bold",
                marginTop: hp("1%")
              }}
            >
              Item
            </Text>
            <Text style={{ fontSize: wp("3%"), color: colors.light_gray }}>
              Description
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: colors.light_gray,
                  fontSize: wp("3%"),
                  fontWeight: "bold",
                  marginTop: hp("3%")
                }}
              >
                Quantity :
              </Text>
              <Text
                style={{
                  fontSize: wp("3.5%"),
                  fontWeight: "bold",
                  marginTop: hp("3%")
                }}
              >
                {this.props.Quantity}
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "flex-start", marginRight: 10 }}>
            <Text
              style={{
                fontSize: wp("6%"),
                color: colors.blue,
                fontWeight: "bold"
              }}
            >
              $12
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            borderWidth: 0.5,
            borderColor: "#ccc7c7",
            marginTop: 10
          }}
        />

        <View style={styles.deliveryCharges}>
          <Text
            style={{
              fontSize: wp("3%"),
              fontWeight: "bold",
              color: colors.gray
            }}
          >
            {this.props.Charges}
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
        <View
          style={{
            width: "100%",
            borderWidth: 0.5,
            borderColor: colors.light_gray,
            marginTop: 10
          }}
        />

        <View style={styles.deliveryCharges}>
          <Text style={{ fontWeight: "bold", fontSize: wp("4%") }}>Total</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: wp("6%"),
              color: colors.blue
            }}
          >
            $29.50
          </Text>
        </View>

        <View
          style={{
            width: "50%",
            borderWidth: 1.5,
            borderRadius: 5,
            borderColor: colors.gray,
            backgroundColor: colors.gray,
            alignSelf: "center",
            marginTop: hp("3%")
          }}
        />
      </View>
    );
  }
}

export default OrderHistoryCard;

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
