import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import SmallPicCard from "../components/SmallPicCard.js";
import ResturantCard from "../components/ResturauntCard.js";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Filter from "../components/Filter";
import Culture from "../components/Cuisine";
const screenWidth = Math.round(Dimensions.get("window").width);
import Quicklinks from "../components/Quicklinks";

const ResturauntData = [
  {
    name: "Baskin Robbins",
    uri:
      "https://assets.vogue.in/photos/5ed0d754193ac7578d6da887/16:9/w_1920,c_limit/chocolate%20ice%20cream%20homemade%20ice%20cream%20recipes%20recipes%20to%20make%20at%20home%20coffee%20ice%20cream.jpg",
    type: "Ice Cream , Deserts",
  },
  {
    name: "Samosa Chaat",
    uri:
      "https://i.ytimg.com/vi/xNmthw6oB7Q/maxresdefault.jpg",
    type: "Street Food, Chinese",
  },
  {
    name: "Yummy Pizza ",
    uri:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg",
    type: "Pizza, Fast Food",
  },
  {
    name: "Burger's Point",
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg",
    type: "Burger, American",
  },
  {
    name: "Briyani Hut",
    uri:
      "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/hna76wivgs286gad71zp",
    type: "North Indian",
  },
];

const Brands = [
  {
    uri:
      "https://corporate.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg",
    name: "McDonalds ",
    time: "30 mins",
  },
  {
    uri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/512px-Dominos_pizza_logo.svg.png",
    name: "Dominos",
    time: "30 mins",
  },
  {
    uri:
      "https://seeklogo.com/images/B/Burger_King-logo-EB00FAD8D3-seeklogo.com.png",
    name: "Burger king",
    time: "30 mins",
  },
  {
    uri:
      "https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo-500x430.png",
    name: "KFC",
    time: "30 mins",
  },
  {
    uri:
      "http://www.licensingcorner.com/wp-content/uploads/2017/12/Haldiram-768x489.jpg",
    name: "Haldirams",
    time: "30 mins",
  },
  {
    uri:
      "https://www.designmantic.com/blog/wp-content/uploads/2016/08/SubWayNewLogo.png",
    name: "SubWay",
    time: "30 mins",
  },
];

const Offers = [
  {
    uri:
      "https://png.pngtree.com/png-clipart/20190630/original/pngtree-festival-special-offers-sale-splash-png-image_4138239.jpg",
  },

  {
    uri:
      "https://i.pinimg.com/originals/27/d3/48/27d3480199613eab6fc4232dc71b7247.png",
  },
  {
    uri:
      "https://i.pinimg.com/736x/a9/e7/b9/a9e7b9c4a3e6d2a260d68bd6fd019dc7.jpg",
  },
  {
  uri:
      "https://thumbs.dreamstime.com/b/discount-food-food-sale-plate-inscription-ketchup-fork-knife-wooden-table-discount-food-food-sale-plate-183260931.jpg",
  },
];

const BrandCard = (props) => {
  return (
    <View style={{ margin: 15 }}>
      <Image
        source={{ uri: props.uri }}
        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 6 }}
      />
      <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
        {" "}
        {props.name}
      </Text>
      <Text style={{ color: "#a9a9a9", alignSelf: "center", marginTop: 10 }}>
        {" "}
        {props.time}
      </Text>
    </View>
  );
};

const LatestOffer = (props) => {
  return (
    <View style={{ marginTop: 15, marginBottom: 15, marginRight: 5, marginLeft: 5 }}>
      <Image
        source={{ uri: props.uri }}
        style={{ height: 120, width: 120, borderRadius: 8 }}
      />
    </View>
  );
};

export default class OrderScreen extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", marginBottom: 70 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d9d9d9",
            padding: 12,
            margin: 8,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="search1" size={20} color="gray" />
            <Text style={{ marginLeft: 10, color: "#A9A9A9", fontFamily: "verdana", }}>
              {" "}
              Search for resturaunts, cuisines...
            </Text>
          </View>
        </View>

        <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 22,
                margin: 6,
                fontStyle: "",
                marginTop: 15,
                fontFamily: "helvetica",
                color: "#EA2900",
              }}
            >
              {" "}
              food{" "}
            </Text>
            <Text style={Styles.topnav}> market </Text>
            <Text style={Styles.topnav}> food@work</Text>
          </ScrollView>
          <Image
            source={require("../assets/images/pizza.jpg")}
            style={{
              margin: 10,
              height: 200,
              width: "95%",
              borderRadius: 8,
              marginBottom: 20,
              borderColor: "orange",
              borderWidth: 1,
            }}
          />
          <Text style={{ fontSize: 20, marginLeft: 10, fontFamily: "verdana", }}>
            {" "}
            Your neighbours are ordering...
          </Text>
          <SmallPicCard />

          <Text style={{ marginLeft: 12, marginTop: 20, color: "#C0C0C0" }}>
            {" "}
            LATEST OFFERS
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Offers.map((item) => {
              return <LatestOffer uri={item.uri} />;
            })}
          </ScrollView>

          <Text style={{ fontWeight: "bold", fontSize: 22, marginLeft: 10 }}>
            {" "}
            Top Brands in Spotlight
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Brands.map((item) => {
              return (
                <BrandCard uri={item.uri} name={item.name} time={item.time} />
              );
            })}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              flexDirection: "row",
              marginBottom: 20,
              marginRight: 5,
              marginTop: 40,
            }}
          >
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
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="ios-options" color="#a9a9a9" />
                <Text style={{ fontSize: 14, color: "#a9a9a9", marginLeft: 5 }}>
                  Filter
                </Text>
              </View>
            </View>
            <Filter Fil="Rating: 4.0+" />
            <Filter Fil="Safe and Hygenic" />
            <Filter Fil="Takeaway" />
            <Filter Fil="Fast Delivery" />
            <Filter Fil="Rating" />
          </ScrollView>

          <View>
            <Text style={{ fontSize: 22, marginLeft: 8, fontFamily: "verdana", }}>
              {" "}
              1922 resturaunts around you
            </Text>
            <Text style={{ fontSize: 14, color: "gray", marginLeft: 15 }}>
              Everything in a list - go nuts!
            </Text>
          </View>
          <View style={{ marginTop: 2 }} />
          {ResturauntData.map((items) => {
            return (
              <ResturantCard
                name={items.name}
                uri={items.uri}
                type={items.type}
              />
            );
          })}

          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#C0C0C0" }}>QUICK LINKS</Text>
            <Text style={{ color: "red" }}>See all</Text>
          </View>

            <View style={{paddingBottom: 20}}>
          <Quicklinks/>
          </View>
        

          {ResturauntData.map((items) => {
            return (
              <ResturantCard
                name={items.name}
                uri={items.uri}
                type={items.type}
              />
            );
          })}

          <Text style={{ fontSize: 22, marginLeft: 8, fontFamily: "verdana", }}>
            Trending cuisines around you
          </Text>

          <View style={{ height: 220, marginTop: 30, paddingBottom: 10 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableOpacity disabled>
                <Culture
                  imageUri={{
                    uri:
                      "https://media.gettyimages.com/photos/mutter-paneer-in-india-picture-id484591838?b=1&k=6&m=484591838&s=612x612&w=0&h=lKEu_Sx0BzY7UP7TSUqqt4nxUfHtPXEajzT-32vz3qw=",
                  }}
                  name="Indian"
                />
              </TouchableOpacity>

              <TouchableOpacity TouchableOpacity disabled>
                <Culture
                  imageUri={{
                    uri:
                      "https://images.freeimages.com/images/small-previews/392/milk-shake-1326835.jpg",
                  }}
                  name="Chinese"
                />
              </TouchableOpacity>

              <TouchableOpacity TouchableOpacity disabled>
                <Culture
                  imageUri={{
                    uri:
                      "https://media.istockphoto.com/photos/masala-dosa-picture-id481750586?b=1&k=6&m=481750586&s=170x170&h=k_r8RrtUYkJy2gR3VTWcPd0K1av3x-kJAVVIzlgHa1A=",
                  }}
                  name="Korean"
                />
              </TouchableOpacity>

              <TouchableOpacity TouchableOpacity disabled>
                <Culture
                  imageUri={{
                    uri:
                      "https://media.istockphoto.com/photos/spicy-indian-chicken-biriyani-rice-with-sliced-eggs-and-garnished-picture-id941715954?b=1&k=6&m=941715954&s=170x170&h=L4H9onPgYj87nfI0rkYuEXzxVuKl9clB_NjRaMyDj64=",
                  }}
                  name="Bakery"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>

          {ResturauntData.map((items) => {
            return (
              <ResturantCard
                name={items.name}
                uri={items.uri}
                type={items.type}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  topnav: {
    fontSize: 22,
    margin: 6,
    fontStyle: "normal",
    marginTop: 15,
    fontFamily: "helvetica",
    color: "gray",
  },
  cardContainerLanding: {
    height: 300,
    borderRadius: 5,
    flexDirection: "column",
    elevation: 2,
    shadowRadius: 0.5,
    marginLeft: 10,
    marginBottom: 10,
    width: screenWidth * 0.95,
  },
  cuisine: {
    fontFamily: "rubikLight",
    fontSize: 14,
    color: "#323232",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  imageContainer: {
    height: 210,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
    borderBottomWidth: 0.3,
  },
  textContainer: {
    height: 90,
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
    fontSize: 20,
    color: "#323232",
  },
});
