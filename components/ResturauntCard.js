import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {  MaterialCommunityIcons } from "@expo/vector-icons";

const screenWidth = Math.round(Dimensions.get("window").width);
const ResturantCard = (props) => {
  return (
    <View style={Styles.cardContainerLanding}>
      <View>
        <View style={Styles.imageContainer}>
          <Image style={Styles.image} source={{ uri: props.uri }} />
        </View>
        <View style={Styles.textContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={Styles.title} numberOfLines={1} ellipsizeMode="tail">
              {props.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons name="star-box" color="red" size={20}/>
              <Text
                style={{ fontSize: 12, marginLeft: 3, color: "black" }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                4.1 <Text style={{ color: "#808080" }}>/5</Text>
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flexDirection: "row", flex: 3 }}>
              <Text numberOfLines={1} style={Styles.cuisine}>
                {props.type}
              </Text>
            </View>
            <View style={{ flexDirection: "row-reverse", flex: 2 }}>
              <Text style={{ fontSize: 12, marginLeft: 3, color: "#808080" }}>
                Rs.200 for one
              </Text>
            </View>
            
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 1,
              }}
            />
          </View>
          <Text style={{fontSize: 12}}> Closes in 30 Mins</Text>
          <View>
            <Image
              source={require("../safety_zomato.jpeg")}
              style={{
                height: 25,
                width: 320,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ResturantCard;

const Styles = StyleSheet.create({
  cardContainerLanding: {
    height: 320,
    borderRadius: 5,
    flexDirection: "column",
    elevation: 2,
    shadowRadius: 0.5,
    marginLeft: 10,
    marginBottom: 30,
    width: screenWidth * 0.95,
  },
  cuisine: {
    fontFamily: "rubikLight",
    fontSize: 12,
    color: "#808080",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  imageContainer: {
    height: 220,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
    borderBottomWidth: 0.3,
  },
  textContainer: {
    height: 100,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "rubik",
    fontSize: 16,
    color: "#323232",
  },
});
