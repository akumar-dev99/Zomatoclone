import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Filter extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 90,
          padding: 5,
          backgroundColor: "white",
          borderColor: "#d3d3d3",
          borderWidth: 0.5,
          borderRadius: 5,
          marginRight: 10,
          left: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 14, color: '#a9a9a9' }}>
          {this.props.Fil}
        </Text>
      </View>
    );
  }
}

export default Filter;
