import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurentCards from "./RestaurentCards";
const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <SafeAreaView>
      <View style={tw`px-3 flex-row justify-between`}>
        <View>
          <Text style={tw`text-lg font-bold`}>{title}</Text>
          <Text style={tw`text-gray-400 text-xs`}>{description}</Text>
        </View>
        <View>
          <ArrowRightIcon style={tw`text-green-500`}></ArrowRightIcon>
        </View>
      </View>

      {/* Featured cards scrollVIew */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurentCards
          imageUrl="https://i.ibb.co/Wf2BHy5/vegan-plate-lunch-with-organic-vegetables.webp"
          title="Wow Sushi"
          id="123"
          ratings={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          longitude={20}
          latitude={0}
        ></RestaurentCards>
        <RestaurentCards
          title={"Pado's"}
          imageUrl="https://i.ibb.co/Wf2BHy5/vegan-plate-lunch-with-organic-vegetables.webp"
        ></RestaurentCards>

        <RestaurentCards
          title={"Pado's"}
          imageUrl="https://i.ibb.co/Wf2BHy5/vegan-plate-lunch-with-organic-vegetables.webp"
        ></RestaurentCards>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeaturedRow;
