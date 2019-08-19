import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  ScrollView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Swiper from "react-native-swiper";
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import { Button } from "../common";
import DetailScreenItem from "./DetailScreenItem";
import DetailScreenComment from "./DetailScreenComment";
import { addToUserCart } from "../FirebaseConfig/firebaseHelper";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDescription: this.props.navigation.state.params.item
    };
  }
  AddToCart = () => {
    const { productDescription } = this.state;
    let ItemCartList = [];
    ItemCartList.push(productDescription);
    addToUserCart(ItemCartList, this.props);
  };

  render() {
    const { productDescription } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {/* /////////////////////////// */}
        <View
          style={{
            height: hp("10%"),
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.blue
          }}
        >
          <SafeAreaView
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: Platform.OS === "ios" ? 20 : 0
            }}
          >
            <View style={{ flex: 1, marginLeft: wp("2%") }}>
              {/* button That return to back screen */}
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  style={{
                    width: wp(config.h_b_b_w),
                    height: hp(config.h_b_b_h)
                  }}
                  source={images.back}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 4, alignItems: "center" }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: wp(config.h_t_f_s),
                  marginRight: wp("18%")
                }}
              >
                Item Page
              </Text>
            </View>
          </SafeAreaView>

          {/* /////////////////////////////// */}
        </View>
        {/* ScrollView to render screen contant */}
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.swiperContainer}>
            <Swiper
              //swiper for displaying images in detail screen
              showsButtons={false}
              paginationStyle={styles.pagination}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
              activeDotColor={"#fff"}
              ref="swiper"
            >
              {/* DetailScreen Item in Swiper */}
              <DetailScreenItem
                ImageSource={{ uri: productDescription.image }}
                ImageStyle={styles.image}
              />
              {/* Item 2 */}
              <DetailScreenItem
                ImageSource={{ uri: productDescription.image }}
                ImageStyle={styles.image}
              />
              {/* item 3 */}
              <DetailScreenItem
                ImageSource={{ uri: productDescription.image }}
                ImageStyle={styles.image}
              />
            </Swiper>
          </View>
          <View style={styles.description}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>
              {productDescription.title}
            </Text>
            <Text style={{ marginTop: 5 }}>{productDescription.country}</Text>
            <View style={{ marginTop: hp("3%") }}>
              {/* //detail Screen description text */}
              <Text style={{ textAlign: "center" }}>
                {productDescription.description}
              </Text>
            </View>
          </View>
          {/* Item detail Quantity and Price */}
          <View style={styles.QuantityItem}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text>Quantity</Text>
                <View style={{ flexDirection: "row", marginTop: hp("4%") }}>
                  <Text style={{ fontSize: 22 }}>2</Text>
                  <Image
                    style={styles.downArrowStyle}
                    source={images.b_arrow}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  marginLeft: wp("15%"),
                  borderColor: colors.gray
                }}
              />
              <View style={{ flexDirection: "column", marginLeft: wp("15%") }}>
                <Text>Total</Text>
                <View style={{ flexDirection: "row", marginTop: hp("4%") }}>
                  <Text style={{ fontSize: 22, color: colors.blue }}>
                    {productDescription.price}
                  </Text>
                </View>
              </View>
            </View>
            {/* Button to navigate MyCart screen */}
            <Button
              style={styles.addToShoppingCart}
              onPress={this.AddToCart}
              Text="ADD TO SHOPPING CART"
              TextStyle={{ color: colors.white }}
            />
          </View>
          <View style={{ marginTop: hp("5%") }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 22, left: 5 }}>
                Comments
              </Text>
              <Text style={styles.addComment}>Add comment +</Text>
            </View>
            <View style={{ marginTop: hp("5%") }}>
              {/* DetailScreen Comment Card */}
              <DetailScreenComment
                comment="Amazing!"
                style={styles.commentContainer}
                ImageSource={{
                  width: wp("4.5%"),
                  height: hp(config.h_b_b_h),
                  tintColor: colors.gray,
                  marginTop: hp("1%")
                }}
                Icon={images.blue_pin}
                IconStyle={styles.starStyle}
                date="by Cristina Guelermo in mArch 15, 2019"
                description="Fantastic taste. Extremly happy and recornend this wine everyone."
              />
              {/* Detail screen comment Card */}
              <DetailScreenComment
                comment="Amazing!"
                style={styles.commentContainer}
                ImageSource={{
                  width: wp("4.5%"),
                  height: hp(config.h_b_b_h),
                  tintColor: colors.gray,
                  marginTop: hp("1%")
                }}
                Icon={images.blue_pin}
                IconStyle={styles.starStyle}
                date="by Cristina Guelermo in mArch 15, 2019"
                description="Fantastic taste. Extremly happy and recornend this wine everyone."
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiperContainer: {
    height: hp("35%")
  },
  image: {
    height: wp("45%"),
    width: wp("45%"),
    marginTop: hp("1%")
  },
  dotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    borderWidth: 1,
    backgroundColor: colors.white
  },
  activeDotStyle: {
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("2%"),
    backgroundColor: colors.gray
  },
  description: {
    alignItems: "center"
  },
  QuantityItem: {
    marginTop: hp("5%"),
    alignItems: "center"
  },
  downArrowStyle: {
    width: wp("4.5%"),
    height: hp(config.h_b_b_h),
    tintColor: colors.gray,
    marginLeft: wp("5.5%"),
    marginTop: hp("1.7%")
  },
  addToShoppingCart: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    height: hp("7%"),
    width: wp("65%"),
    marginTop: hp("5%"),
    borderRadius: 4
  },
  addComment: {
    fontSize: 16,
    color: colors.blue,
    marginRight: wp("2%"),
    marginTop: hp("1%")
  },
  commentContainer: {
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: colors.gray,
    height: hp("20%"),
    width: wp("90%"),
    alignSelf: "center",
    marginBottom: 5
  },
  starStyle: {
    width: wp("4.5%"),
    height: hp(config.h_b_b_h),
    tintColor: colors.gray,
    marginLeft: wp("1%"),
    marginTop: hp("1%")
  }
});
