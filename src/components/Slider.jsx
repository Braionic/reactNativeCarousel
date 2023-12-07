import { View, Text, Image, FlatList, Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";

export default function Slider() {
  const [currentposition, setcurrentposition] = useState(0);
  const handleref = useRef();

  useEffect(() => {
    if(true){
      const handleIntervalf = setInterval(() => {
        if (currentposition === Data.length - 1) {
          handleref.current.scrollToIndex({
            index: 0,
            animation: true
          });
        } else {
          handleref.current.scrollToIndex({
            index: currentposition + 1,
            animation: true
          });
        }
      }, 4000);
    
    return () => clearInterval(handleIntervalf);
    }
    
  });

  const getItemLayout = (data, index)=> ({
      index: index,
      offset: Dimensions.get("screen").width * index,
      length: Dimensions.get("screen").width,
    })
  const Data = [
    { id: 1, img: require("../../assets/images/carrot.jpg") },
    { id: 2, img: require("../../assets/images/1789.jpg") },
    { id: 3, img: require("../../assets/images/curry.png") },
    { id: 4, img: require("../../assets/images/lasgana.png") },
  ];

  function handlescroll(event) {
    console.log(
      event.nativeEvent.contentOffset.x / Dimensions.get("screen").width
    );
    setcurrentposition(
      event.nativeEvent.contentOffset.x / Dimensions.get("screen").width
    );
  }

  const scrollicon = Data.map((item, Index) => (
    <View
      key={Index}
      style={{
        backgroundColor: currentposition === Index ? "red" : "blue",
        width: 20,
        height: 20,
        borderRadius: 30,
        marginHorizontal: 2,
      }}
    ></View>
  ));
  return (
    <View>
      <View>
        <FlatList
          ref={handleref}
          getItemLayout={getItemLayout}
          data={Data}
          keyExtractor={(item)=> item.id}
          onScroll={handlescroll}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Image
                style={{ width: Dimensions.get("window").width, height: 200 }}
                resizeMode="contain"
                source={item.img}
              />
            </View>
          )}
          horizontal
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {scrollicon}
      </View>
    </View>
  );
}
