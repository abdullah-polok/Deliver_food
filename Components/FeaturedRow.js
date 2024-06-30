import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/solid";
const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View style={tw`px-3 flex-row justify-between`}>
      <View>
        <Text style={tw`text-xl font-bold`}>{title}</Text>
        <Text style={tw`text-gray-400`}>{description}</Text>
      </View>
      <View>
        <ArrowRightIcon style={tw`text-green-300 font-bold`}></ArrowRightIcon>
      </View>
    </View>
  );
};

export default FeaturedRow;
