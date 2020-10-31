import React, { Component } from "react";
import { Image, TextInput, StyleSheet, View, Text } from "react-native";

class Culture extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 10, marginLeft: 5 }}>
        <View
          style={{
            marginRight: 5,
            height: 160,
            width: 140,
            marginLeft: 5,
            borderWidth: 0.5,
            borderColor: "#dddddd",
            borderRadius: 5,
          }}
        >
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              borderRadius: 5,
            }}
          />
        </View>

        <View
          style={{
            top: 5,
            left: 5,
          }}
        >
          <Text style={{ fontSize: 12 }}>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Culture;
