import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const Food = [
  {
    img:
      "https://media.istockphoto.com/photos/masala-dosa-picture-id481750586?b=1&k=6&m=481750586&s=170x170&h=k_r8RrtUYkJy2gR3VTWcPd0K1av3x-kJAVVIzlgHa1A=",
    name: "Dosa",
  },
  {
    img:
      "https://images.freeimages.com/images/small-previews/392/milk-shake-1326835.jpg",
    name: "Shakes",
  },
  {
    img:
      "https://media.gettyimages.com/photos/mutter-paneer-in-india-picture-id484591838?b=1&k=6&m=484591838&s=612x612&w=0&h=lKEu_Sx0BzY7UP7TSUqqt4nxUfHtPXEajzT-32vz3qw=",
    name: "Thali",
  },
  {
    img:
      "https://media.istockphoto.com/photos/spicy-indian-chicken-biriyani-rice-with-sliced-eggs-and-garnished-picture-id941715954?b=1&k=6&m=941715954&s=170x170&h=L4H9onPgYj87nfI0rkYuEXzxVuKl9clB_NjRaMyDj64=",
    name: "Biriyani",
  },
  {
    img:
      "https://media.gettyimages.com/photos/paneer-butter-masala-or-cheese-cottage-curry-popular-indian-menu-in-picture-id669312136?b=1&k=6&m=669312136&s=612x612&w=0&h=o5Gb4ZcK2NzchxBIg3AD4E_EY697FIW4cDCLBhSTF9Y=",
    name: "Paneer",
  },
  {
    img:
      "https://media.gettyimages.com/photos/idili-picture-id1129440333?b=1&k=6&m=1129440333&s=170x170&h=EGjhIG3MIDL2NnH_Mpai_PJBY6owqWEZvVitStxYweM=",
    name: "Idli",
  },
  // {
  //   img:
  //     "https://media.istockphoto.com/photos/vada-a-south-indian-snack-picture-id469920431?b=1&k=6&m=469920431&s=170x170&h=LDZQ82668cYUa77fTp-lchDScWJINasc1BSAIo__33Q=",
  //   name: "Vada",
  // },
  // {
  //   img:
  //     "https://media.gettyimages.com/photos/caramel-cappuccino-frappe-coffee-picture-id513590204?b=1&k=6&m=513590204&s=612x612&w=0&h=kJLhEm-M6dfxfUefbM1n2ZAEKm8CZ8owBdYGogSgyvk=",
  //   name: "Cold Coffee",
  // },
  // {
  //   img:
  //     "https://images.freeimages.com/images/small-previews/acf/icecream-goodness-no1-1531356.jpg",
  //   name: "Ice cream",
  // },
  // {
  //   img:
  //     "https://media.gettyimages.com/photos/traditional-indian-bread-aloo-paratha-or-aalu-parotha-potato-stuffed-picture-id694739192?b=1&k=6&m=694739192&s=170x170&h=IGhUZltmhuo1Wxn5spQvEoTcbk3Zi9ksdiELNLvzXIk=",
  //   name: "paranthas",
  // },
  // {
  //   img:
  //     "https://media.istockphoto.com/photos/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-picture-id979916088?b=1&k=6&m=979916088&s=170x170&h=-qizQy0VBh4qhhxlVGJkpnut7WjPA0nG29Z-6Sd1-_Y=",
  //   name: "Chole Bhature",
  // },
  // {
  //   img:
  //     "https://media.gettyimages.com/photos/mouthwatering-delicious-homemade-burger-used-to-chop-beef-on-the-picture-id907077304?b=1&k=6&m=907077304&s=612x612&w=0&h=-6mvQkaRN8F9bHkvwi8-sC3O6M7Uc5_dQoZhKkgL1NY=",
  //   name: "burger",
  // },
  // {
  //   img:
  //     "https://images.freeimages.com/images/small-previews/d8c/pizzas-1329569.jpg",
  //   name: "Pizza",
  // },
  // {
  //   img:
  //     "https://media.istockphoto.com/photos/stuffed-sev-puri-is-a-popular-indian-roadside-chat-item-served-in-a-picture-id979811164",
  //   name: "chaat",
  // },
  // {
  //   img:
  //     "https://media.istockphoto.com/photos/samosa-and-chutney-picture-id967110094?b=1&k=6&m=967110094&s=612x612&h=8Dw3i-Hb8sRDG9LLhTwzBTVmq4Hh8K6gBfmS5Jj2JNA=",
  //   name: "samosa",
  // },
];

class SmallPicCard extends React.Component {
  constructor() {
    super();

    // showMore() {
    //   this.state.itemsToShow === 3 ? (
    //     this.setState({ itemsToShow: this.state.cars.length, expanded: true })
    //   ) : (
    //     this.setState({ itemsToShow: 3, expanded: false })
    //   )
  }
  render() {
    return (
      <View
        style={{ margin: 6, marginTop: 10, marginLeft: 10, marginRight: 5 }}
      >
        <ImageBackground
          source={{ uri: this.props.img }}
          style={{
            height: 90,
            width: 120,
            justifyContent: "flex-end",
            alignContent: "flex-end",
            alignItems: "flex-end",
          }}
          imageStyle={{ borderRadius: 8 }}
        >
          <View
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              width: 120,
              height: 25,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              alignContent: "center",
              borderBottomEndRadius: 8,
            }}
          >
            <Text style={{ fontSize: 15 }}> {this.props.name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default class FoodCard extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {Food.map((item) => {
              console.log(item);
              return <SmallPicCard img={item.img} name={item.name} />;
            })}
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#dcdcdc",
              height: 30,
              borderTopWidth: 0.5,
              borderBottomWidth: 0.5,
              alignItems: "center",
              borderColor: "#a9a9a9",
              marginTop: 20
            }}
          >
            <Text>see more</Text>
            <Entypo name="chevron-down" size={18} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
