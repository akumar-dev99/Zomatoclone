import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Feather,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import * as Font from 'expo-font';
import Constants from "expo-constants";
import OrderScreen from "./screens/OrderScreen.js";
import GoOutScreen from "./screens/goOutScreen.js";
import GoldScreen from "./screens/GoldScreen.js";
import ProfileScreen from "./screens/profileScreen.js";
import ExploreScreen from "./screens/ExploreScreen.js";


const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 5,
        marginTop: Constants.statusBarHeight,
        borderBottomWidth: 0.5,
        borderColor: "#D3D3D3",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="home" size={26} color="black" />
          <View style={{flexDirection: 'column', padding: 0}}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "verdana",
                marginLeft: 10,
              }}
            >
              Home
            </Text>
            <Text style={{marginLeft: 5, color: 'gray', fontFamily: "verdana",}}> Sheila Apartment, Sector 21, Rohini, New Delhi... </Text>
          </View>
        </View>

        <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
      </View>
    </View>
  );
};

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const bottomTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Order") {
            return <Feather name="shopping-bag" size={29} color={color} />;
          } else if (route.name === "Go Out") {
            return (
              <MaterialCommunityIcons
                name="shoe-print"
                size={29}
                color={color}
              />
            );
          } else if (route.name === "Gold") {
            return (
              <FontAwesome5
                name="crown"
                size={22}
                color={color}
              />
            );
          } else if (route.name === "Explore") {
            return (
              <MaterialCommunityIcons
                name="compass-outline"
                size={29}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return <Image source={require('./assets/images/user.png')} style={{height: 32, width: 38}}/>;
          }

          // You can return any component that you like here!
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
        indicatorStyle: {
          backgroundColor: "green",
        },

        borderWidth: 2,
        labelStyle: {
          fontSize: 13,
        },
      }}
    >
      <Tabs.Screen name="Order" component={OrderScreen} />
      <Tabs.Screen name="Go Out" component={GoOutScreen} />
      <Tabs.Screen name="Gold" component={GoldScreen} />
      <Tabs.Screen name="Explore" component={ExploreScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};



export default function App() {
  const [assets, setAssets] = React.useState(false);
  async function loadResourcesAndDataAsync() {
    // Load fonts
    await Font.loadAsync({
      ...Ionicons.font,
      'rubik': require('./assets/fonts/Rubik-Regular.ttf'),
      'rubikLight': require('./assets/fonts/Rubik-Light.ttf'),
      'rubikMedium': require('./assets/fonts/Rubik-Medium.ttf'),
      'pacifico': require('./assets/fonts/Pacifico.ttf'),
      'alvaro': require('./assets/fonts/AlvaroFREE.ttf'),
      'quikhand': require('./assets/fonts/Quikhand.ttf'),
      'fredoka': require('./assets/fonts/fredoka-one.one-regular.ttf'),
      'numans': require('./assets/fonts/Numans-Regular.ttf'),
    });
     setAssets(true);
  }

  React.useEffect(() => {
    // when component mounts load all the necessary resources
    // such as font and Ionicons
    loadResourcesAndDataAsync();
  });

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="tabs"
            component={bottomTabs}
            options={{
              header: () => {
                return <Header />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
