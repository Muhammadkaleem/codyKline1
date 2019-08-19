import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class MyCartView extends Component {
  render() {
    return (
      <View style={this.props.ViewStyle}>
        <Image
          source={this.props.ImageSource}
          style={this.props.ImageStyle}
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
            {this.props.Title}
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
    );
  }
}

export default MyCartView;
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
