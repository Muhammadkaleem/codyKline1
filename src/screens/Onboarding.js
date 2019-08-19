import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import Swiper from "react-native-swiper";
import SwiperItem from "./SwiperItem";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Button } from "../common";

export default class OnBoarding extends Component {
  //receive props
  constructor(props) {
    super(props);
    this.state = {
      newIndex: 1,
      currentIndex: 1
    };
  }
  //Index of swiper screen will be change if user swip
  onIndexChanged(index) {
    this.setState({ currentIndex: index });
  }
  //on press button this is place in render function increment will be done in index of swiper && if index value will be 2 then user move to AgeValidation screen
  scrollItem() {
    console.log("here");
    // console.log('SwiperIndex: “,this.refs.swiper.index )
    if (this.state.currentIndex === 2) {
      this.props.navigation.navigate("AgeValidation");
      this.refs.swiper.scrollBy(1);
    } else {
      this.refs.swiper.scrollBy(1);
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 4 }}>
          <Swiper
            //Button show or not : property
            showsButtons={false}
            //style of pages in swiper
            paginationStyle={styles.pagination}
            //Index dots in swiper screen style
            dotStyle={styles.dotStyle}
            //the style of active screen dot
            activeDotStyle={styles.activeDotStyle}
            //color of active screen dot
            activeDotColor={colors.active_dot}
            //the referance of swiper for increment in index
            ref="swiper"
            //helper function : defind on top with index change functionality of swiper
            onIndexChanged={this.onIndexChanged.bind(this)}
          >
            <SwiperItem
              ImageSource={images.break_heart}
              ImageStyle={{
                width: wp("35%"),
                height: hp("35%")
              }}
            />
            <SwiperItem
              ImageSource={images.break_heart}
              ImageStyle={{
                width: wp("35%"),
                height: hp("35%")
              }}
            />
            <SwiperItem
              ImageSource={images.break_heart}
              ImageStyle={{
                width: wp("35%"),
                height: hp("35%")
              }}
            />
          </Swiper>
        </View>

        <View style={{ flex: 1, alignItems: "center" }}>
          {/* on user Press button screen will scroll */}

          <Button
            style={styles.addButton}
            onPress={() => this.scrollItem()}
            Text="NEXT"
            TextStyle={{ color: colors.white, fontSize: wp("5%") }}
          />

          <Button
            Text="Skip"
            TextStyle={{
              color: colors.black,
              fontSize: wp("4%"),
              textDecorationLine: "underline"
            }}
            style={{ width: wp("70%"), height: hp("7%"), alignItems: "center" }}
            onPress={() => this.props.navigation.navigate("AgeValidation")}
          />
        </View>
      </View>
    );
  }
}
//defind styling of Views and images that are use in OnBoarding Screen
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    width: wp("70%"),
    height: hp("7%"),
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: colors.blue,
    marginBottom: 10
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage2: {
    flex: 1
  },
  dotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.white,
    borderWidth: 1
  },
  activeDotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.gray
  }
});
