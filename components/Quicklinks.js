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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzCSyOGl_38xz9eag3vETjvLfOD1jwEkeOdA&usqp=CAU",
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVejNWtFP0ka1QJ11DkVfnl4pv58DtIIOe7A&usqp=CAU",
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQypLcJ2j8Jd6Cat5FVEsoQvARikGP6LjVAkA&usqp=CAU",
  },
  {
    img:
      "https://thumbs.dreamstime.com/z/healthy-food-word-font-text-typographic-logo-design-green-l-calligraphy-hand-written-green-color-healthy-food-word-text-font-101389768.jpg"
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-C01wArPNQ-laizEA3yR7BU2kfFE9pIuzKg&usqp=CAU" 
    },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Zy7YfLnO4RC7NlYobmwVUJpMv11mi9jxvQ&usqp=CAU"
  },
  {
    img:
      "https://image.shutterstock.com/image-vector/food-word-vector-drawn-lettering-260nw-425668567.jpg"
  },
  {
    img:
      "https://economictimes.indiatimes.com/thumb/msid-60741021,width-1200,height-900,resizemode-4,imgsize-70796/small-biz/startups/zomato-plans-to-stop-charging-commission-from-restaurants/zomato.jpg?from=mdr"
  },
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

class Quicklinks extends React.Component {
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
        style={{ margin: 6, marginTop: 10, marginLeft: 10 }}
      >
        <Image
          source={{ uri: this.props.img }}
          style={{
            height: 60,
            width: 85,
            justifyContent: "flex-end",
            alignContent: "flex-end",
            alignItems: "flex-end",
            borderRadius: 5
          }}
        />
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
              return <Quicklinks img={item.img}/>;
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
