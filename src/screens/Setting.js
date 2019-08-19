import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import Header from "../components/Header";
import Card from "../SettingCommonCard/Card";
import Profile from "../SettingCommonCard/Profile";
import { Button } from "../common";
import SettingButton from "../SettingCommonCard/SettingButton";

const { height } = Dimensions.get("window");

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // custom setting from home screen header
    drawerLabel: "Account",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.account}
        style={[{ width: 20, height: 20 }, { tintColor: tintColor }]}
        resizeMode={"contain"}
      />
    )
  });
  //setting states for counter
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2
    };
  }

  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Header nav={nav} name={"Setting"} />
        <View style={styles.mainContainer}>
          {/* Profile Component palce and define all properties */}
          <Profile
            title="Robbert D. junoir"
            titleStyle={{
              fontWeight: "bold",
              fontSize: wp("5.5%"),
              color: colors.black0
            }}
            phone="+12542312564"
            phoneTextStyle={{ color: "gray" }}
            email="Robbert@me.com"
            emailStyle={{ color: "gray" }}
            Icon={images.b_arrow}
            image={images.avatar}
            lableText="Delivery address"
            icon1={images.pencil}
            icon1Style={{ width: hp("2.5%"), height: hp("2.5%") }}
          />
          <ScrollView style={{ flex: 3 }}>
            {/* Address Cards that are seperate components palce and also define properties */}
            <Card
              title="Home"
              titleStyle={{
                fontWeight: "bold",
                fontSize: wp("5%"),
                color: colors.black
              }}
              //Setting Card props
              address="55, Long View, Austin, NY,"
              addressStyle={{ color: "gray", fontSize: wp("3.5%") }}
              phone="app. 133; 2432432432"
              phoneStyle={{ color: "gray", fontSize: wp("3.5%") }}
              PenIcon={images.edit}
              PenIconStyle={{ width: 20, height: 20 }}
              DeleteIcon={images.trash}
              DeleteIconStyle={{ width: 20, height: 20 }}
            />
            <Card
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
            />
            <Card
              title="Office"
              titleStyle={{
                fontWeight: "bold",
                fontSize: wp("5%"),
                color: colors.black
              }}
              address="55, Long View, Austin, NY,"
              addressStyle={{ color: "gray", fontSize: wp("3.5%") }}
              phone="app. 133; 24322432"
              phoneStyle={{ color: "gray", fontSize: wp("3.5%") }}
              PenIcon={images.edit}
              PenIconStyle={{ width: 20, height: 20 }}
              DeleteIcon={images.trash}
              DeleteIconStyle={{ width: 20, height: 20 }}
            />
            <Card
              title="Office"
              titleStyle={{
                fontWeight: "bold",
                fontSize: wp("5%"),
                color: colors.black
              }}
              address="55, Long View, Austin, NY,"
              addressStyle={{ color: "gray", fontSize: wp("3.5%") }}
              phone="app. 133; 24322432"
              phoneStyle={{ color: "gray", fontSize: wp("3.5%") }}
              PenIcon={images.edit}
              PenIconStyle={{ width: 20, height: 20 }}
              DeleteIcon={images.trash}
              DeleteIconStyle={{ width: 20, height: 20 }}
            />
          </ScrollView>
          {/* add new address button that provide user to add new address */}
          <Button
            style={[
              styles.addButton,
              { alignSelf: "center", marginBottom: hp("1.5%") }
            ]}
            Text="ADD NEW ADDRESS"
            TextStyle={{ color: colors.blue }}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          {/* here his avalabe payment Options */}
          <SettingButton
            ImageSource={images.right_arrow}
            Text=" Payment Options"
          />
          <SettingButton ImageSource={images.right_arrow} Text="Password" />
          <SettingButton
            ImageSource={images.right_arrow}
            Text="Notifications"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10
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
