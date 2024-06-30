import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon, LinkIcon } from "react-native-heroicons/solid";
const RestaurentCards = ({ imageUrl, title, id }) => {
  return (
    <View style={tw`mt-4 px-3 shadow-md rounded  w-75`}>
      <Image
        source={{ uri: imageUrl }}
        style={tw`h-3/4 w-65 rounded flex-row mx-auto  mt-4`}
      ></Image>
      <Text style={tw`text-xl px-2 mt-1`}>{title}</Text>
      <View style={tw`flex-row items-center pl-2`}>
        <StarIcon style={tw`text-green-500 mr-2`} />
        <Text style={tw`text-xs text-gray-400 mr-2`}>4.8</Text>
        <Text style={tw`text-xs text-gray-400`}>Offers</Text>
      </View>
      <View style={tw` pl-2 flex-row items-center`}>
        <LinkIcon style={tw`text-green-500 mr-2`}></LinkIcon>
        <Text style={tw`text-xs text-gray-400`}>Nearby, Shadow Street</Text>
      </View>
    </View>
  );
};

export default RestaurentCards;
