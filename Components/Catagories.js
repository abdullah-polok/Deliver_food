import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatagoryCard from './CatagoryCard'

const Catagories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:15,paddingTop:10}}
    >
      {/* Catagory Cards */}
      <CatagoryCard imageUrl="https://i.ibb.co/L6zYXjL/food.webp" title="Testing 1"></CatagoryCard>
      <CatagoryCard imageUrl="https://i.ibb.co/L6zYXjL/food.webp" title="Testing 2"></CatagoryCard>
      <CatagoryCard imageUrl="https://i.ibb.co/L6zYXjL/food.webp" title="Testing 3"></CatagoryCard>
    </ScrollView>
  )
}

export default Catagories