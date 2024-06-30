import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/solid";
const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View style={tw`px-3 flex-row justify-between`}>
      <View>
        <Text style={tw`text-lg font-bold`}>{title}</Text>
        <Text style={tw`text-gray-400 text-xs`}>{description}</Text>
      </View>
      <View>
        <ArrowRightIcon style={tw`text-green-500`}></ArrowRightIcon>
      </View>
    </View>
  );
};

export default FeaturedRow;
