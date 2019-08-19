import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Platform
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../../../assests/Colors";
import firebase from "react-native-firebase";
import { withNavigation } from "react-navigation";

class Tab3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      props: this.props.props,
      products: []
    };
  }

  componentDidMount() {
    this.productList();
  }

  productList = () => {
    const markers = [];
    firebase
      .firestore()
      .collection("items")
      .get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
          markers.push(doc.data());
        });
        this.setState({ products: [...markers] });
      });

    return markers;
    // const snapshot = firebase
    //   .firestore()
    //   .collection("items")
    //   .get();
    // console.log("snapshoret", snapshot);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{}}>
          <View style={styles.containerBox}>
            <FlatList
              style={{ flexDirection: "row", flexWrap: "wrap" }}
              data={this.state.products}
              renderItem={this._renderItem}
              numColumns={2}
              contentContainerStyle={{
                paddingBottom: 10
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

  _renderItem = item => {
    const { products } = this.state;

    return (
      <TouchableOpacity
        key={item.index}
        style={styles.innerBox}
        onPress={() =>
          this.props.navigation.navigate("DetailScreen", {
            item: item.item
          })
        }
      >
        <Text
          style={{
            fontSize: 18,
            color: colors.black,
            fontWeight: "bold"
          }}
        >
          {item.item.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{item.item.country}</Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: hp("3%")
          }}
        >
          <Image
            source={{ uri: item.item.image }}
            style={{
              height: wp("23%"),
              marginBottom: hp("1%"),
              width: "100%"
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            color: colors.maroon,
            fontWeight: "bold",
            marginTop: hp("2%")
          }}
        >
          {item.item.country}
        </Text>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  containerBox: {
    flexDirection: "row"
  },
  innerBox: {
    height: hp("30%"),
    width: wp("45%"),
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === "ios" ? 0 : 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderWidth: Platform.OS === "ios" ? 1 : 0,
    marginLeft: wp("3.2%"),
    marginTop: hp("1%"),
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 8
  }
});
export default withNavigation(Tab3);
