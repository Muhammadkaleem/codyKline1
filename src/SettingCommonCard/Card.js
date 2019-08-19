import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
const { height } = Dimensions.get("window");

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={[styles.shadowBox]}>
        <View style={{ flex: 1 }}>
          <Image source={images.radio} style={{ width: 20, height: 20 }} />
        </View>

        <View style={{ flex: 4 }}>
          <Text style={this.props.titleStyle}>{this.props.title}</Text>
          <Text style={this.props.addressStyle}>{this.props.address}</Text>
          <Text style={this.props.phoneStyle}>{this.props.phone}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Image
            source={this.props.PenIcon}
            style={this.props.PenIconStyle}
            resizeMode={"contain"}
          />
          <Image
            source={this.props.DeleteIcon}
            style={this.props.DeleteIconStyle}
            resizeMode={"contain"}
          />
        </View>
      </View>
    );
  }
}

export default Card;
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

{
  /* <Card
              title="Office"
              titleStyle={{
                fontWeight: "bold",
                fontSize: wp("5%"),
                color: colors.black
              }}
              // Setting second
              address="55, Long View, Austin, NY,"
              addressStyle={{ color: "gray", fontSize: wp("3.5%") }}
              phone="app. 133; 24322432"
              phoneStyle={{ color: "gray", fontSize: wp("3.5%") }}
              PenIcon={images.edit}
              PenIconStyle={{ width: 20, height: 20 }}
              DeleteIcon={images.trash}
              DeleteIconStyle={{ width: 20, height: 20 }}
            /> */
}
