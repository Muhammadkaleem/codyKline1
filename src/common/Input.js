import React from "react";
import { View, Text, TextInput } from "react-native";

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  underlineColorAndroid,
  KeyboardType
}) => {
  const { inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid={underlineColorAndroid}
        KeyboardType={KeyboardType}
      />
    </View>
  );
};
export { Input };

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    fontSize: 14
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};
