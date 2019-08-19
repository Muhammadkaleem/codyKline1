import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import DeliveryStatus from "./DeliveryStatus";
import PaymentHeader from "./PaymentHeader";
import Input from "./Input";
import { Button } from "../common";

export default class Payment extends Component {
  constructor(props) {
    super(props);
    //define initial state for card number, card holder , expiry date , cvv etc
    this.state = {
      card_number: "",
      card_holder: "",
      exp_date: "",
      cvv: ""
    };
  }
  //   Pay helper metthod define this will navigate screen to Delivery Status screen
  pay = () => {
    console.log("here");
    this.props.navigation.navigate("DeliveryStatus");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Pyment header its seperate Component contain button that holds onBack functionality  */}
        <PaymentHeader
          onPress={() => this.props.navigation.goBack()}
          Text="Payment"
        />
        {/* ScrollView to redner content on screen */}
        <ScrollView style={styles.formStyle}>
          {/* KeyboardAvoidingView added to View properly on typing in input fields */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.container}
          >
            <View style={styles.fieldsContainer}>
              {/* Input will take credit Card number */}
              <Input
                label="Credit Card Number"
                ContainerStyle={styles.textInputContainer}
                ViewStyle={{ marginTop: hp("2%") }}
                TextInputstyle={styles.inputs}
                secureTextEntry={false}
                underlineColorAndroid="transparent"
                value={this.state.card_holder}
                //setting state for Card holder
                onChangeText={text => this.setState({ card_holder: text })}
              />
              {/* Cardholder Name input */}
              <Input
                label="Cardholder's Name"
                ContainerStyle={styles.textInputContainer}
                ViewStyle={{ marginTop: hp("2%") }}
                TextInputstyle={styles.inputs}
                secureTextEntry={false}
                underlineColorAndroid="transparent"
                value={this.state.card_holder}
                //setting state for Card holder
                onChangeText={text => this.setState({ card_holder: text })}
              />
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: "45%", marginRight: 30 }}>
                  {/* expiry date input */}
                  <Input
                    label="Expiry Date"
                    ContainerStyle={styles.textInputContainer}
                    ViewStyle={{ marginTop: hp("2%") }}
                    TextInputstyle={styles.inputs}
                    secureTextEntry={false}
                    underlineColorAndroid="transparent"
                    value={this.state.card_holder}
                    //setting state for Card holder
                    onChangeText={text => this.setState({ card_holder: text })}
                  />
                </View>
                <View style={{ width: "45%" }}>
                  {/* cvv input field */}
                  <Input
                    label="CVV"
                    ContainerStyle={styles.textInputContainer}
                    ViewStyle={{ marginTop: hp("2%") }}
                    TextInputstyle={styles.inputs}
                    secureTextEntry={false}
                    underlineColorAndroid="transparent"
                    value={this.state.card_holder}
                    //setting state for Card holder
                    onChangeText={text => this.setState({ card_holder: text })}
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: hp("3%"),
                  alignItems: "center"
                }}
              >
                {/* Button that hold Pay method and render it for payment process */}
                <Button
                  style={{
                    backgroundColor: colors.blue,
                    width: wp("85%"),
                    height: hp("8%"),
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  Text="PAY"
                  TextStyle={{ color: colors.white, fontWeight: "bold" }}
                  onPress={() => this.pay()}
                />
              </View>
              <View
                style={{
                  marginTop: hp("2%"),
                  alignItems: "center"
                }}
              >
                <Button
                  style={{
                    backgroundColor: colors.white,
                    borderWidth: 1.3,
                    width: wp("85%"),
                    height: hp("8%"),
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  Text="PAY CASH ON DELIVERY"
                  TextStyle={{ color: colors.blue, fontWeight: "bold" }}
                  onPress={() => this.pay()}
                />
              </View>
              <View
                style={{
                  marginTop: hp("2%"),
                  alignItems: "center"
                }}
              >
                {/* Button that render pay function  */}
                <Button
                  style={{
                    backgroundColor: colors.white,
                    borderWidth: 1.3,
                    width: wp("85%"),
                    height: hp("8%"),
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  Text="PAY WITH PAYPAL"
                  TextStyle={{ color: colors.blue, fontWeight: "bold" }}
                  onPress={() => this.pay()}
                />
              </View>
              <View
                style={{
                  width: wp("85%"),
                  // borderBottomWidth: 1,
                  marginLeft: wp("2%"),
                  borderBottomColor: colors.gray,
                  marginTop: hp("2%"),
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    textDecorationLine: "underline",
                    marginBottom: 30
                  }}
                >
                  PayPal payments are accepted with additional cost of only $10
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formStyle: {
    flex: 1
  },
  fieldsContainer: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20
  },
  textInputContainer: {
    borderColor: colors.light_gray,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },

  inputs: {
    flex: 1,
    paddingLeft: 10,
    color: colors.black
  }
});
