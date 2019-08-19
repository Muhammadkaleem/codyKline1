import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import colors from "../../assests/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Input extends Component {
  render() {
    return (
      <View style={this.props.ViewStyle}>
        <Text style={{ color: colors.black, marginBottom: 7 }}>
          {this.props.label}
        </Text>
        <View style={this.props.ContainerStyle}>
          <TextInput
            style={this.props.TextInputstyle}
            secureTextEntry={this.props.secureTextEntry}
            underlineColorAndroid={this.props.underlineColorAndroid}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
          />
        </View>
      </View>
    );
  }
}

export default Input;
