import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
const CatagoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity style={tw` relative mr-2`}>
      <Image source={{ uri: imageUrl }} style={tw`h-20 w-20 rounded`}></Image>
      <Text style={tw`absolute bottom-1 text-white fold-bold`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CatagoryCard;
