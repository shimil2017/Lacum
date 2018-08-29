import React, { Component } from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

const Button = props => {
  function getContent() {
    if (props.children) {
      return props.children;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {props.iconname && (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: props.iconname === "sc-facebook" ? 7 : -14,
              marginRight: props.iconname === "sc-facebook" ? 4 : 6
            }}
          >
            <Icon
              name={props.iconname}
              size={24}
              color="#FFFFFF"
              iconStyle={{ alignItems: "center" }}
            />
          </View>
        )}
        <View style={{}}>
          <Text
            style={[
              props.noDefaultStyles ? "" : styles.labelStyle,
              props.styles ? props.styles.label : ""
            ]}
          >
            {props.label}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        props.noDefaultStyles ? "" : styles.button,
        props.styles ? props.styles.button : ""
      ]}
    >
      {getContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 40
  }
});

export default Button;
