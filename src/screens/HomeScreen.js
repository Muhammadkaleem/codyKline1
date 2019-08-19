import React, { Component } from "react";
import { View, Image, TextInput, StyleSheet } from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Container, Tab, Tabs } from "native-base";
import Header from "./../components/Header";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    // custom styling for Home screen
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={images.home}
        style={[{ width: 20, height: 20 }, { tintColor: tintColor }]}
        resizeMode={"contain"}
      />
    )
  });

  constructor(props) {
    super(props);
    //setting state for search
    this.state = {
      search: ""
    };
  }

  componentDidMount() {}

  openDrawer = () => {
    console.log(this.props);
    console.log("openDrawer");
    // this.props.navigation.openDrawer();
  };

  render() {
    const nav = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        {/* home screen Header using top tab Native base package */}
        <Header nav={nav} name={"Home"} bottomHeader={true} />
        <View style={styles.textInputHeaderBg}>
          <View style={styles.textInputContainer}>
            <Image
              style={{ width: wp(config.h_b_b_w), height: hp(config.h_b_b_h) }}
              source={images.search}
              resizeMode="contain"
            />
            {/* Text input for search */}
            <TextInput
              placeholder="Search..."
              style={styles.inputs}
              secureTextEntry={false}
              underlineColorAndroid="transparent"
              value={this.state.search}
              //setting state for search
              onChangeText={text => this.setState({ search: text })}
            />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Container>
            {/* tabs that contain item Category screen */}
            <Tabs tabBarUnderlineStyle={{ backgroundColor: colors.blue }}>
              {/* Tab 1 contain Category 2 */}
              <Tab
                heading="Category"
                textStyle={{ color: colors.black }}
                activeTextStyle={{ color: colors.black }}
                tabStyle={{
                  backgroundColor: "white",
                  borderBottomColor: colors.black
                }}
                activeTabStyle={{ backgroundColor: "white" }}
              >
                <Tab1 props={this.props} />
              </Tab>
              {/* Tab 2 contain Category 2 */}
              <Tab
                heading="Category 2"
                textStyle={{ color: colors.black }}
                activeTextStyle={{ color: colors.black }}
                tabStyle={{ backgroundColor: colors.white }}
                activeTabStyle={{ backgroundColor: colors.white }}
              >
                <Tab2 props={this.props} />
              </Tab>
              {/* tab 3 contain Category 3 screen */}
              <Tab
                heading="Category 3"
                textStyle={{ color: colors.black }}
                activeTextStyle={{ color: colors.black }}
                tabStyle={{ backgroundColor: colors.white }}
                activeTabStyle={{ backgroundColor: colors.white }}
              >
                <Tab3 props={this.props} />
              </Tab>
            </Tabs>
          </Container>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputHeaderBg: {
    alignItems: "center",
    justifyContent: "center",
    height: hp("10%"),
    backgroundColor: colors.blue
  },
  textInputContainer: {
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    width: wp("88%"),
    height: hp("6%"),
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    flex: 1,
    padding: wp("2%"),
    color: colors.black,
    fontSize: wp("5%")
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
