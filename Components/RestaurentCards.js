import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { StarIcon, LinkIcon } from "react-native-heroicons/solid";
const RestaurentCards = ({
  imageUrl,
  title,
  id,
  ratings,
  genre,
  address,
  short_description,
  dishes,
  longitude,
  latitude,
}) => {
  return (
    <View style={tw`mt-4 px-3 shadow-md rounded  w-75`}>
      <TouchableOpacity>
        <Image
          source={{ uri: imageUrl }}
          style={tw`h-36 w-64 rounded flex-row mx-auto  mt-4`}
        ></Image>
        <Text style={tw`text-xl px-2 mt-1`}>{title}</Text>
        <View style={tw`flex-row items-center pl-2`}>
          <StarIcon style={tw`text-green-500 mr-2`} />
          <Text style={tw`text-xs text-gray-400 mr-2`}>
            <Text style={tw`text-green-500`}>{ratings}</Text> . {genre}
          </Text>
        </View>
        <View style={tw` pl-2 flex-row items-center`}>
          <LinkIcon style={tw`text-green-500 mr-2`}></LinkIcon>
          <Text style={tw`text-xs text-black`}>{address}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RestaurentCards;
