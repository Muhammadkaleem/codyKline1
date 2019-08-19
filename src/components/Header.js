import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import config from "../../assests/Config";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Header extends Component {
  constructor(props) {
    super(props);
    //in common header props set as initial state just like header hight width title etc
    this.state = {
      drawerProps: this.props.nav,
      height: this.props.height ? this.props.height : hp("10%"),
      name: this.props.name ? this.props.name : "Header",
      rightIcon: this.props.rightIcon ? this.props.rightIcon : false,
      bottomHeader: this.props.bottomHeader ? this.props.bottomHeader : false,
      headerRightIconName: this.props.headerRightIconName
        ? this.props.headerRightIconName
        : "",
      bottomHeight: this.props.bottomHeight ? this.props.bottomHeight : 0
    };
  }

  render() {
    const nav = this.state.drawerProps;
    return (
      <View
        style={{
          height: this.state.height,
          width: wp("100%"),
          backgroundColor: colors.blue,
          flexDirection: "column"
        }}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.headerLeftIcon}>
            <TouchableOpacity onPress={() => nav.openDrawer()}>
              {/* set icon on header for drawerProps */}
              <Ionicons name="ios-menu" size={32} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ color: colors.white, fontSize: 22 }}>
              {this.state.name}
            </Text>
          </View>
          {this.state.rightIcon === true ? (
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Ionicons
                name={this.state.headerRightIconName}
                size={30}
                color={colors.white}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Platform.OS === "ios" ? 20 : 0,
    margin: wp("2%")
  },
  headerLeftIcon: {
    alignItems: "center",
    justifyContent: "center"
  },
  headerCenter: {
    textAlign: "center",
    marginRight: wp("22%")
  }
});
