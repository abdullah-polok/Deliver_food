import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronDownIcon,
  UserIcon,
  ServerIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/solid";
import Catagories from "../Components/Catagories";
import FeaturedRow from "../Components/FeaturedRow";

const Home = () => {
  ////Customize header
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:"Testing"
      headerShown: false,
    });
  }, []);

  ////////////////////////
  return (
    <SafeAreaView style={tw`mt-5 bg-white pt-5 `}>
      {/* Header */}
      <View style={tw`flex-row px-3`}>
        <Image
          source={require("../assets/user-icon-2048x2048-ihoxz4vq.png")}
          style={tw`h-10 w-10 mr-2 `}
        />
        <View style={tw` flex-1`}>
          <Text style={tw`text-gray-400`}>Deliver now!</Text>
          <Text style={tw`text-xl font-bold`}>
            Current Location
            <ChevronDownIcon
              size={20}
              style={tw`text-green-500 `}
            ></ChevronDownIcon>
          </Text>
        </View>
        <UserIcon style={tw`text-green-500 text-xl`}></UserIcon>
      </View>

      {/* Seach design  and adjustmentIcon */}
      <View style={tw`flex-row items-center  mt-2 px-3 pb-2 `}>
        <View
          style={tw`flex-row  items-center flex-1  bg-gray-300 mr-1 p-2 rounded`}
        >
          <ServerIcon size={25} style={tw`text-green-500 mr-2 `}></ServerIcon>
          <TextInput style={tw``} placeholder="Search Food"></TextInput>
        </View>
        <View>
          <AdjustmentsVerticalIcon
            size={25}
            style={tw`bg-gray-300`}
          ></AdjustmentsVerticalIcon>
        </View>
      </View>

      {/* Scrollable View (body) */}

      <ScrollView
        style={tw`bg-gray-100 mt-4`}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Catagory Components */}
        <Catagories />

        {/* Features rows */}
        <FeaturedRow
          id="1"
          title={"Offer near you!"}
          description="Paid placements from our partner"
        ></FeaturedRow>
        <FeaturedRow
          id="2"
          title={"Featured"}
          description="Why not support your local food"
        ></FeaturedRow>
        <FeaturedRow
          id="3"
          title={"Tasty Discount"}
          description="Paid placements from our partner"
        ></FeaturedRow>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
